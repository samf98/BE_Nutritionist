/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let categoriesUsersModel = sails.models.userCategories;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let usersCategories = await categoriesUsersModel.destroy({
		where: where
	});
	return usersCategories;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let usersCategories = await categoriesUsersModel.update({ ...parameters
	}, {
		where: where
	});
	return usersCategories;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}
    if (_.has(parameters, 'categorieId')) {
		where.categoriaId = parameters.categoriaId;
	}


	let usersCategories = await categoriesUsersModel.findAll({
		where: where
	});
	return usersCategories;
};


let _create = async function(parameters) {
	let userId = parameters.userId;
	let categoriesId = parameters.categoriesId;
	let categories = await categoriesUsersModel.create({
		userId,
		categoriesId
	});

	return categories;
};

module.exports = {
	list: async function(request, response) {
		let userCategories = await _list(request.query);
		response.json(userCategories);
	},
	create: function(request, response) {
		let userCategories = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userCategories = await _delete(request.body);
		response.json(userCategories);
	},
	update: async function(request, response) {
		let userCategories = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};