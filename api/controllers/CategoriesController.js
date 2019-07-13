/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let categoriesModel = sails.models.categories;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'description')) {
		where.name = parameters.description;
	}

	let categories = await categoriesModel.destroy({
		where: where
	});
	return categories;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let categories = await categoriesModel.update({ ...parameters
	}, {
		where: where
	});
	return categories;
};


let _list = async function(parameters) {
	let where = {};
	

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	
	if (_.has(parameters, 'description')) {
		where.description = parameters.description;
	}

	let categories = await categoriesModel.findAll({
		where: where,
		include: [{
			model: sails.models.users,
			as: 'users'
		}]
	});
	return categories;
};


let _create = async function(parameters) {
	let description = parameters.description;
	let categories = await categoriesModel.create({
		description
	});

	return categories;
};

module.exports = {
	list: async function(request, response) {
		let categories = await _list(request.query);
		response.json(categories);
	},
	create: function(request, response) {
		let categories = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let categories = await _delete(request.body);
		response.json(categories);
	},
	update: async function(request, response) {
		let categories = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};
