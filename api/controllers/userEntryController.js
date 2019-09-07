/**
 * UsersTagsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let usersEntriesModel = sails.models.user_entry;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let usersEntries = await usersEntriesModel.destroy({
		where: where
	});
	return usersEntries;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let usersEntries = await usersEntriesModel.update({ ...parameters
	}, {
		where: where
	});
	return usersEntries;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'entryId')) {
		where.entryId = parameters.entryId;
	}

	let usersEntries = await usersEntriesModel.findAll({
		where: where
	});
	return usersEntries;
};


let _create = async function(parameters) {
	let userId = parameters.userId;
	let entryId = parameters.tagId;
	let entries = await usersEntriesModel.create({
		userId,
		entryId
	});

	return entries;
};

module.exports = {
	list: async function(request, response) {
		let userEntries = await _list(request.query);
		response.json(userEntries);
	},
	create: function(request, response) {
		let userEntry = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userEntries = await _delete(request.body);
		response.json(userEntries);
	},
	update: async function(request, response) {
		let userEntry = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};