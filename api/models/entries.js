module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		date: {
			type: Sequelize.STRING,
			allowNull: false
		},
		water: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
		steps: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		weight: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
		hours_of_sleep: {
			type: Sequelize.DOUBLE,
			allowNull: false
		}
	},
	options: {
		tableName: 'entries'
	}
};