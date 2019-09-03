module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING
		}
	},
	associations: function () {
		sails.models.tags.belongsToMany(sails.models.foods, {
			through: {
				model: sails.models.foodtag,
				unique: false
			},
			as: 'foods',
			foreignKey: {
				name: 'tagId',
				unique: false
			}
		});
		sails.models.tags.belongsToMany(sails.models.users, {
			through: {
				model: sails.models.usertag,
				unique: false
			},
			as: 'users',
			foreignKey: {
				name: 'tagId',
				unique: false
			}
		});
	},
	options: {
		tableName: 'tags'
	}
};