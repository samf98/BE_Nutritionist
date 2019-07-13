/**
 * AppointmentUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let appointmentUsersModel = sails.models.userAppointment;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	let userAppointment = await appointmentUsersModel.destroy({
		where: where
	});
	return userAppointment;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let userAppointment = await appointmentUsersModel.update({ ...parameters
	}, {
		where: where
	});
	return userAppointment;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'userId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}
    if (_.has(parameters, 'appointmentID')) {
		where.appointmentID = parameters.appointmentID;
	}


	let userAppointment = await appointmentUsersModel.findAll({
		where: where
	});
	return userAppointment;
};


let _create = async function(parameters) {
	let userId = parameters.userId;
	let appointmentID = parameters.appointmentID;
	let appointment = await appointmentUsersModel.create({
		userId,
		appointmentID
	});

	return appointment;
};

module.exports = {
	list: async function(request, response) {
		let userAppointment = await _list(request.query);
		response.json(userAppointment);
	},
	create: function(request, response) {
		let userAppointment = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userAppointment = await _delete(request.body);
		response.json(userAppointment);
	},
	update: async function(request, response) {
		let userAppointment = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};