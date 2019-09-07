/**
 * UsersTagsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let usersTagsModel = sails.models.user_tag;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let usersTags = await usersTagsModel.destroy({
		where: where
	});
	return usersTags;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let usersTags = await usersTagsModel.update({ ...parameters
	}, {
		where: where
	});
	return usersTags;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'tagId')) {
		where.tagId = parameters.tagId;
	}

	let usersTags = await usersTagsModel.findAll({
		where: where
	});
	return usersTags;
};


let _create = async function(parameters) {
	let userId = parameters.userId;
	let tagId = parameters.tagId;
	let tags = await usersTagsModel.create({
		userId,
		tagId
	});

	return tags;
};

module.exports = {
	list: async function(request, response) {
		let userTags = await _list(request.query);
		response.json(userTags);
	},
	create: function(request, response) {
		let userTag = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userTags = await _delete(request.body);
		response.json(userTags);
	},
	update: async function(request, response) {
		let userTag = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};