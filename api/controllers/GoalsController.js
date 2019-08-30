/**
 * GoalsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */ 

let _ = require('lodash');

let goalsModel = sails.models.goals;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	let goals = await goalsModel.destroy({
		where: where
	});
	return goals;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let goals = await goalsModel.update({ ...parameters
	}, {
		where: where
	});
	return goals;
};

let _list = async function(parameters) {
    let where = {};
    
    if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'type')) {
		where.type = parameters.type;
	}

	if (_.has(parameters, 'goal')) {
		where.goal = parameters.goal;
    }
    
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let goals = await goalsModel.findAll({
		where: where
	});
	return goals;
};

let _create = async function(parameters) {
	let type = parameters.type;
    let goal = parameters.goal;
    let userId = parameters.userId;
	let goals = await goalsModel.create({
		type,
        goal,
        userId
	});

	return goals;
};

module.exports = {
	list: async function(request, response) {
		let goals = await _list(request.query);
		response.json(goals);
	},
	create: function(request, response) {
		let goal = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let goals = await _delete(request.body);
		response.json(goals);
	},
	update: async function(request, response) {
		let goals = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};