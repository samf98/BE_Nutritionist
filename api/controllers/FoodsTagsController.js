/**
 * RolesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let foodsTagsModel = sails.models.foodtag;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'foodId')) {
		where.foodId = parameters.foodId;
	}

	let foodsTags = await foodsTagsModel.destroy({
		where: where
	});
	return foodsTags;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let foodsTags = await foodsTagsModel.update({ ...parameters
	}, {
		where: where
	});
	return foodsTags;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'foodId')) {
		where.foodId = parameters.foodId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'tagId')) {
		where.tagId = parameters.tagId;
	}


	let foodsTags = await foodsTagsModel.findAll({
		where: where
	});
	return foodsTags;
};


let _create = async function(parameters) {
	let foodId = parameters.foodId;
	let tagId = parameters.tagId;
	let tags = await foodsTagsModel.create({
		foodId,
		tagId
	});

	return tags;
};

module.exports = {
	list: async function(request, response) {
		let foodTags = await _list(request.query);
		response.json(foodTags);
	},
	create: function(request, response) {
		let foodTag = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let foodTags = await _delete(request.body);
		response.json(foodTags);
	},
	update: async function(request, response) {
		let foodTag = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};