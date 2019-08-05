module.exports = {
	attributes: {
		date: {
			type: Sequelize.STRING,
			allowNull: false
		},
		time: {
			type: Sequelize.STRING,
			allowNull: false
		},
		patientId: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		patientData: {
			type: Sequelize.STRING,
			allowNull: true,
		}
	}
	, options: {
		tableName: 'appointment'
	}
};