exports.up = function(knex) {
	return knex.schema
		.createTable('projects', table => {
			table.increments();
			table.text('name', 128).notNullable();
			table.text('description', 256).notNullable();
			table.boolean('completed');
		})
		.createTable('actions', table => {
			table.increments();
			table.text('description', 256).notNullable();
			table.text('notes');
			table.boolean('completed');
			table
				.integer('project_id')
				.notNullable()
				.unsigned();
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('projects').dropTableIfExists('actions');
};
