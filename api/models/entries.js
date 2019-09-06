module.exports = {
	attributes: {
		userId: {
			type: Sequelize.STRING,
			allowNull: false
		},
		date: {
			type: Sequelize.STRING,
			allowNull: false
		},
		water: {
			type: Sequelize.STRING,
			allowNull: false
		},
		steps: {
			type: Sequelize.STRING,
			allowNull: false
		},
		weight: {
			type: Sequelize.STRING,
			allowNull: false
		},
		hours_of_sleep: {
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	options: {
		tableName: 'entries'
	}
};