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
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('projects').dropTableIfExists('actions');
};
