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
	let food = await foodsModel.create({
		name,
		image,
		description
	});

	food = await _list({
		name,
		image,
		description
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
