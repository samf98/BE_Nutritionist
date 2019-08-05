module.exports = {
	attributes: {
		patientId: {
			type: Sequelize.INTEGER,
			unique: 'user_appointment',
			allowNull: false
		},
		appointmentId: {
			type: Sequelize.INTEGER,
			unique: 'user_appointment',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_appointment'
	}
};