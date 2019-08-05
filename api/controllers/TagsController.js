/**
 * TagsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */ 

let _ = require('lodash');

let tagsModel = sails.models.tags;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	let tags = await tagsModel.destroy({
		where: where
	});
	return tags;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let tags = await tagsModel.update({ ...parameters
	}, {
		where: where
	});
	return tags;
};

let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
    }
    
	if (_.has(parameters, 'description')) {
		where.description = parameters.description;
	}

	let tags = await tagsModel.findAll({
		where: where,
		include: [{
			model: sails.models.foods,
			as: 'foods'
		}]
	});
	return tags;
};

let _create = async function(parameters) {
	let name = parameters.name;
	let description = parameters.description;
	let tags = await tagsModel.create({
		name,
		description
	});

	return tags;
};

module.exports = {
	list: async function(request, response) {
		let tags = await _list(request.query);
		response.json(tags);
	},
	create: function(request, response) {
		let tag = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let tags = await _delete(request.body);
		response.json(tags);
	},
	update: async function(request, response) {
		let tags = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};