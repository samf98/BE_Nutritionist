module.exports = {
	attributes: {
		Patient_ID: {
			type: Sequelize.INTEGER,
			unique: 'user_appointments',
			allowNull: false
		},
		Nutritionist_ID: {
			type: Sequelize.INTEGER,
			unique: 'user_appointments',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_appointments'
	}
};