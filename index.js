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

function getActionsByProjectId(project_id) {}

app.post('/api/projects', async (req, res, next) => {
  try {
    const result = await createProject(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
})

app.listen(4000, () => {
	console.log('listening on 4000');
});
