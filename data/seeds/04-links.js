exports.seed = function(knex) {
	return knex('links')
		.truncate()
		.then(function() {
			return knex('links').insert([
				{ action_id: 1, context_id: 1 },
				{ action_id: 1, context_id: 2 },
				{ action_id: 1, context_id: 5 },
				{ action_id: 2, context_id: 6 },
				{ action_id: 2, context_id: 4 },
				{ action_id: 2, context_id: 5 },
				{ action_id: 3, context_id: 1 },
				{ action_id: 3, context_id: 3 },
				{ action_id: 4, context_id: 7 },
				{ action_id: 4, context_id: 3 },
				{ action_id: 4, context_id: 2 },
				{ action_id: 4, context_id: 8 },
			]);
		});
};
