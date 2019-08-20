/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let nutritionfactsModel = sails.models.nutritionfacts;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	let nutritionfacts = await nutritionfactsModel.destroy({
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

	let nutritionfacts = await nutritionfactsModel.update({ ...parameters
	}, {
		where: where
	});


	nutritionfacts = await  _list(where)[0];
	return nutritionfacts;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'calories')) {
		where.calories = parameters.calories;
	}

	if (_.has(parameters, 'carbs')) {
		where.carbs = parameters.carbs;
	}

	if (_.has(parameters, 'proteins')) {
		where.proteins = parameters.proteins;
	}

	if (_.has(parameters, 'fat')) {
		where.fat = parameters.fat;
	}

	if (_.has(parameters, 'sugar')) {
		where.sugar = parameters.sugar;
	}

	if (_.has(parameters, 'sodium')) {
		where.sodium = parameters.sodium;
	}

	if (_.has(parameters, 'transfat')) {
		where.transfat = parameters.transfat;
	}	

	if (_.has(parameters, 'fiber')) {
		where.fiber = parameters.fiber;
	}

	if (_.has(parameters, 'foodId')) {
		where.foodId = parameters.foodId;
	}

    let nutritionfacts = await nutritionfactsModel.findAll({
        where: where
    });
    return nutritionfacts;
};


let _create = async function(parameters) {
	let calories = parameters.calories;
	let carbs = parameters.carbs;
	let proteins = parameters.proteins;
	let fat = parameters.fat;
	let sugar = parameters.sugar;
	let sodium = parameters.sodium;
	let transfat = parameters.transfat;
	let fiber = parameters.fiber;
	let foodId = parameters.foodId;
	let nutritionfact = await nutritionfactsModel.create({
		calories,
		carbs,
		proteins,
		fat,
		sugar,
		sodium,
		transfat,
		fiber,
		foodId,
		
	});

    nutritionfact = await _list({
		calories,
		carbs,
		proteins,
		fat,
		sugar,
		soidum,
		transfat,
		fiber,
		foodId,
	});

	return nutritionfact[0];
};

module.exports = {
	list: async function(request, response) {
		let nutritionfacts = await _list(request.query);
		response.json(nutritionfacts);
	},
	create: function(request, response) {
		let nutritionfact = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let nutritionfacts = await _delete(request.body);
		response.json(nutritionfacts);
	},
	update: async function(request, response) {
		let nutritionfact = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};