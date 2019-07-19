exports.seed = function(knex) {
	return knex('contexts')
		.truncate()
		.then(function() {
			return knex('contexts').insert([
				{ name: 'at home' },
				{ name: 'at the office' },
				{ name: 'at the gym' },
				{ name: 'on a computer' },
				{ name: 'on a car' },
				{ name: 'on a plance' },
				{ name: 'in the kitchen' },
				{ name: 'on mars' },
			]);
		});
};
