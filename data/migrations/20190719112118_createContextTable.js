exports.up = function(knex) {
	return knex.schema
		.createTable('contexts', table => {
			table.increments();
			table.text('name', 128).notNullable();
		})
		.createTable('links', table => {
			table.increments();
			table
				.integer('action_id')
				.notNullable()
				.unsigned()
				.references('actions.id');
			table
				.integer('context_id')
				.notNullable()
				.unsigned()
				.references('contexts.id');
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('projects').dropTableIfExists('actions');
};
