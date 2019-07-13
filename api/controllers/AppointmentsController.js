/**
 * AppointmentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let appointmentsModel = sails.models.appointments;

let _delete = async function (parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}
	/*
		if (_.has(parameters, 'nutritionist')) {
			where.nutritionist = parameters.nutritionist;
		}
	    
		if (_.has(parameters, 'patient')) {
			where.patient = parameters.patient;
		}
	    
		if (_.has(parameters, 'date')) {
			where.date = parameters.date;
		}
	
		if (_.has(parameters, 'time')) {
			where.time = parameters.time;
		}
	    
		if (_.has(parameters, 'patientData')) {
			where.patientData = parameters.patientData;
		}
*/
	let appointments = await appointmentsModel.destroy({
		where: where
	});
	return appointments;
};

let _update = async function (parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let appointments = await appointmentsModel.update({
		...parameters
	}, {
			where: where
		});
	return appointments;
};


let _list = async function (parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'Patient_ID')) {
		where.Patient_ID = parameters.Patient_ID;
	}

	if (_.has(parameters, 'Nutritionist_ID')) {
		where.Nutritionist_ID = parameters.Nutritionist_ID;
	}

	if (_.has(parameters, 'Date')) {
		where.Date = parameters.Date;
	}

	if (_.has(parameters, 'Time')) {
		where.Time = parameters.Time;
	}

	if (_.has(parameters, 'PatientData')) {
		where.PatientData = parameters.PatientData;
	}

	let appointments = await appointmentsModel.findAll({
		where: where,
		/*include: [{
			model: sails.models.roles,
			as: 'users'
		}]*/
	});
	return appointments;
};


let _create = async function (parameters) {
	let id = parameters.id;
	let ID = parameters.ID;
	let Patient_ID = parameters.Patient_ID;
	let Nutritionist_ID = parameters.Nutritionist_ID;
	let Date = parameters.Date;
	let Time = parameters.Time;
	let PatientData = parameters.PatientData
	let appointments = await appointmentsModel.create({
		id,
		ID,
		Patient_ID,
		Nutritionist_ID,
		Date,
		Time,
		PatientData
	});

	return appointments;
};

module.exports = {
	list: async function (request, response) {
		let appointments = await _list(request.query);
		response.json(appointments);
	},
	create: function (request, response) {
		let appointment = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function (request, response) {
		let appointments = await _delete(request.body);
		response.json(appointments);
	},
	update: async function (request, response) {
		let appointment = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};