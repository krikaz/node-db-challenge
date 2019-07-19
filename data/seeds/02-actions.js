exports.seed = function(knex) {
	return knex('actions')
		.truncate()
		.then(function() {
			return knex('actions').insert([
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 1,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 1,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 1,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 2,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 2,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 2,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 2,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 2,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 3,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 3,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 3,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 4,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 5,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 5,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 5,
				},
				{
					description: 'action',
					notes: 'some notes',
					completed: false,
					project_id: 5,
				},
			]);
		});
};
