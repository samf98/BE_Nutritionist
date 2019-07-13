module.exports = {
	attributes: {
		foodId: {
			type: Sequelize.INTEGER,
			unique: 'food_tag',
			allowNull: false
		},
		tagId: {
			type: Sequelize.INTEGER,
			unique: 'food_tag',
			allowNull: false
		}
	},
	options: {
		tableName: 'food_tag'
	}
};