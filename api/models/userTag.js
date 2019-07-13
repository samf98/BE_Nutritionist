module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			unique: 'user_tag',
			allowNull: false
		},
		tagId: {
			type: Sequelize.INTEGER,
			unique: 'user_tag',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_tag'
	}
};