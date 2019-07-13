module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING
		},
		color: {
			type: Sequelize.STRING
		}
	},
	associations: function() {
		sails.models.roles.belongsToMany(sails.models.users, {
			through: {
			    model: sails.models.userrole,
			    unique: false
			},
			as: 'users',
			foreignKey: {
				name: 'roleId',
				unique: false
			}
		}); 
	},
	options: { 
		tableName: 'roles'
	}
};