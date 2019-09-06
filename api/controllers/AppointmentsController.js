/**
 * appointmentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */ 

let _ = require('lodash');

let appointmentsModel = sails.models.appointments;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	let appointments = await appointmentsModel.destroy({
		where: where
	});
	return appointments;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let appointments = await appointmentsModel.update({ ...parameters
	}, {
		where: where
	});
	return tags;
};

let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'date')) {
		where.date = parameters.date;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
    }
    
	if (_.has(parameters, 'time')) {
		where.time = parameters.time;
	}

	if (_.has(parameters, 'patientId')) {
		where.patientId = parameters.patientId;
	}

	if (_.has(parameters, 'patientData')) {
		where.patientData = parameters.patientData;
	}

	let appointments = await appointmentsModel.findAll({
		where: where
	});
	return appointments;
};

let _create = async function(parameters) {
	let date = parameters.date;
	let time = parameters.time;
	let patientId = parameters.patientId;
	let patientName = parameters.patientName;
	let patientData = parameters.patientData;
	let appointments = await appointmentsModel.create({
		date,
		time,
		patientId,
		patientName,
		patientData
	});

	return appointments;
};

module.exports = {
	list: async function(request, response) {
		let appointments = await _list(request.query);
		response.json(appointments);
	},
	create: function(request, response) {
		let appointment = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let appointments = await _delete(request.body);
		response.json(appointments);
	},
	update: async function(request, response) {
		let appointments = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};