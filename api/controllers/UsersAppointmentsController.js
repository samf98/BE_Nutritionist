let _ = require('lodash');

let usersappointmentsModel = sails.models.userappointment;

let _delete = async function(parameters) {
	let where = {};

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}


	let usersappointments = await usersappointmentsModel.destroy({
		where: where
	});
	return usersappointments;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let usersappointments = await usersappointmentsModel.update({ ...parameters
	}, {
		where: where
	});
	return usersappointments;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'patientId')) {
		where.userId = parameters.userId;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'appointmentId')) {
		where.appointmentId = parameters.appointmentId;
	}


	let usersappointments = await usersappointmentsModel.findAll({
		where: where
	});
	return usersappointments;
};


let _create = async function(parameters) {
	let patientId = parameters.patientId;
	let appointmentId = parameters.appointmentId;
	let appointments = await usersappointmentsModel.create({
		patieneId,
		appointmentId
	});

	return appointments;
};

module.exports = {
	list: async function(request, response) {
		let userappointments = await _list(request.query);
		response.json(userappointments);
	},
	create: function(request, response) {
		let userappointment = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let userappointments = await _delete(request.body);
		response.json(userappointments);
	},
	update: async function(request, response) {
		let userappointment = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};