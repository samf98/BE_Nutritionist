/**
 * FoodsController 
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let foodsModel = sails.models.foods;

let _list = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'image')) {
		where.image = parameters.image;
	}

	if (_.has(parameters, 'description')) {
		where.description = parameters.description;
	}

	if (_.has(parameters, 'calories')) {
		where.calories = parameters.calories;
	}

	if (_.has(parameters, 'carbs')) {
		where.carbs = parameters.carbs;
	}

	if (_.has(parameters, 'proteins')) {
		where.proteins = parameters.proteins;
	}

	if (_.has(parameters, 'fat')) {
		where.fat = parameters.fat;
	}

	if (_.has(parameters, 'sugar')) {
		where.sugar = parameters.sugar;
	}

	if (_.has(parameters, 'sodium')) {
		where.sodium = parameters.sodium;
	}

	if (_.has(parameters, 'transfat')) {
		where.transfat = parameters.transfat;
	}	

	if (_.has(parameters, 'fiber')) {
		where.fiber = parameters.fiber;
	}

	let foods = await foodsModel.findAll({
		where: where,
		include: [{
			model: sails.models.tags,
			as: 'tags'
		}]
	});

	return foods;
};

let _create = async function(parameters) {
	let name = parameters.name;
	let image = parameters.image;
	let description = parameters.description;
	let calories = parameters.calories;
	let carbs = parameters.carbs;
	let proteins = parameters.proteins;
	let fat = parameters.fat;
	let sugar = parameters.sugar;
	let sodium = parameters.sodium;
	let transfat = parameters.transfat;
	let fiber = parameters.fiber;
	let food = await foodsModel.create({
		name,
		image,
		description,
		calories,
		carbs,
		proteins,
		fat,
		sugar,
		sodium,
		transfat,
		fiber
	});

	food = await _list({
		name,
		image,
		description,
		calories,
		carbs,
		proteins,
		fat,
		sugar,
		sodium,
		transfat,
		fiber
	});

	return food[0];
};

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	let foods = await foodsModel.destroy({
		where: where
	});

	return {
		deleted: true
	};
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let foods = await foodsModel.update({ ...parameters
	}, {
		where: where
	});

	foods = await  _list(where)[0];
	return food;
};

module.exports = {
	list: async function(request, response) {
		let foods = await _list(request.query);
		response.json(foods);
	},
	create: function(request, response) {
		let food = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let foods = await _delete(request.body);
		response.json(foods);
	},
	update: async function(request, response) {
		let food = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};
