/**
 * RolesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let rolesUsersModel = sails.models.userrole;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let usersRoles = await rolesUsersModel.destroy({
		where: where
	});
	return usersRoles;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let usersRoles = await rolesUsersModel.update({ ...parameters
	}, {
		where: where
	});
	return usersRoles;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'roleId')) {
		where.roleId = parameters.roleId;
	}

	let usersRoles = await rolesUsersModel.findAll({
		where: where
	});
	return usersRoles;
};


let _create = async function(parameters) {
	let userId = parameters.userId;
	let roleId = parameters.roleId;
	let roles = await rolesUsersModel.create({
		userId,
		roleId
	});

	return roles;
};

module.exports = {
	list: async function(request, response) {
		let userRoles = await _list(request.query);
		response.json(userRoles);
	},
	create: function(request, response) {
		let userRole = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userRoles = await _delete(request.body);
		response.json(userRoles);
	},
	update: async function(request, response) {
		let userRole = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};