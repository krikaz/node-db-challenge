exports.seed = function(knex) {
	return knex('projects')
		.truncate()
		.then(function() {
			return knex('projects').insert([
				{ name: 'project', description: 'description', completed: false },
				{ name: 'project', description: 'description', completed: false },
				{ name: 'project', description: 'description', completed: false },
				{ name: 'project', description: 'description', completed: false },
				{ name: 'project', description: 'description', completed: false },
			]);
		});
};
