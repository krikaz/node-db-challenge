const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const app = express();
app.use(express.json());

function createProject(project) {
	return db('projects').insert({
		name: project.name,
		description: project.description,
		completed: project.completed,
	});
}

function createAction(action) {
	return db('actions').insert({
		description: action.description,
		notes: action.notes,
		completed: action.completed,
	});
}

// function getActionsByProjectId(project_id) {
// 	return db
// 		.select('*')
// 		.from('projects')
// 		.innerJoin('actions', 'projects.id', 'actions.project_id')
// 		.where('projects.id', project_id);
// }

async function getActionsByProjectId(project_id) {
	const actions = await db
		.select(
			'actions.id',
			'actions.description',
			'actions.notes',
			'actions.completed'
		)
		.from('actions')
		.where('actions.project_id', project_id);
	const project = await db
		.select('*')
		.from('projects')
		.where('projects.id', project_id);
	return {
		id: project[0].id,
		name: project[0].name,
		description: project[0].description,
		completed: project[0].completed,
		actions: actions,
	};
}

app.post('/api/projects', async (req, res, next) => {
	try {
		const result = await createProject(req.body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.post('/api/actions', async (req, res, next) => {
	try {
		const result = await createAction(req.body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.get('/api/projects/:id/actions', async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await getActionsByProjectId(id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

app.listen(4000, () => {
	console.log('listening on 4000');
});
