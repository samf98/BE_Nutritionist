module.exports = {
	attributes: {
        type: {
			type: Sequelize.STRING,
			allowNull: false
		},
		goal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false
        },
	},
	options: { 
		tableName: 'goals'
	}
};