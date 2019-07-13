module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			unique: 'user_categories',
			allowNull: false
		},
		categoriesId: {
			type: Sequelize.INTEGER,
			unique: 'user_categories',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_categories'
	}
};