module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		weight: {
			type: Sequelize.STRING,
			allowNull: true
		},
		height: {
			type: Sequelize.STRING,
			allowNull: true
		},
		gender: {
			type: Sequelize.STRING,
			allowNull: true
		},
		age: {
			type: Sequelize.STRING,
			allowNull: true
		},
		role: {
			type: Sequelize.STRING,
			allowNull: true
		},
	},
	options: {
		tableName: 'users'
	},
	associations: function () {
		sails.models.users.belongsToMany(sails.models.tags, {
			through: {
				model: sails.models.usertag,
				unique: false
			},
			as: 'tags',
			foreignKey: {
				name: 'userId',
				unique: false
			}
		});
		sails.models.users.belongsToMany(sails.models.entries, {
			as: 'entries',
			through: {
				model: sails.models.userentry,
				unique: false
			},
			foreignKey: {
				name: 'userId',
				unique: false
			}
		});

		sails.models.users.belongsToMany(sails.models.appointments, {
			through: {
				model: sails.models.userappointment,
				unique: false
			},
			as: 'appointments',
			foreignKey: {
				name: 'Patient_ID',
				unique: false
			}
		});
	}
};