/**
 * RolesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let rolesModel = sails.models.roles;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	let roles = await rolesModel.destroy({
		where: where
	});
	return roles;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let roles = await rolesModel.update({ ...parameters
	}, {
		where: where
	});
	return roles;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'color')) {
		where.color = parameters.color;
	}

	if (_.has(parameters, 'description')) {
		where.description = parameters.description;
	}

	let roles = await rolesModel.findAll({
		where: where,
		include: [{
			model: sails.models.users,
			as: 'users'
		}]
	});
	return roles;
};


let _create = async function(parameters) {
	let name = parameters.name;
	let color = parameters.color;
	let description = parameters.description;
	let roles = await rolesModel.create({
		name,
		color,
		description
	});

	return roles;
};

module.exports = {
	list: async function(request, response) {
		let roles = await _list(request.query);
		response.json(roles);
	},
	create: function(request, response) {
		let role = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let roles = await _delete(request.body);
		response.json(roles);
	},
	update: async function(request, response) {
		let role = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};