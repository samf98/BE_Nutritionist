module.exports = {
	attributes: {
		id: {
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey: true
		},
		ID: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Patient_ID: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Nutritionist_ID: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Date: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Time: {
			type: Sequelize.STRING,
			allowNull: false
		},
		PatientData: {
			type: Sequelize.STRING,
			allowNull: true,
		}
	}
	, options: {
		tableName: 'appointment'
	}
	/*
	associations: function() {
		sails.models.appointments.belongsToMany(sails.models.users, {
			through: {
			    model: sails.models.userappointment,
			    unique: false
			},
			as: 'users',
			foreignKey: {
				name: 'appointmentsId',
				unique: false
			}
		}); 
	},*/
};