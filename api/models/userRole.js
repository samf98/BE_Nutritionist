module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			unique: 'user_role',
			allowNull: false
		},
		roleId: {
			type: Sequelize.INTEGER,
			unique: 'user_role',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_role'
	}
};