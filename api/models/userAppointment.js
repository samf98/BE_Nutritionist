module.exports = {
	attributes: {
		PatientId: {
			type: Sequelize.INTEGER,
			unique: 'user_appointments',
			allowNull: false
		},
		appointmentsID: {
			type: Sequelize.INTEGER,
			unique: 'user_appointments',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_appointments'
	}
};