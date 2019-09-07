module.exports = {
	attributes: {
		userId: {
			type: Sequelize.INTEGER,
			unique: 'user_entry',
			allowNull: false
		},
		entryId: {
			type: Sequelize.INTEGER,
			unique: 'user_entry',
			allowNull: false
		}
	},
	options: {
		tableName: 'user_entry'
	}
};