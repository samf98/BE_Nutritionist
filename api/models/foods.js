/**
 * foods.js 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		image: {
			type: Sequelize.STRING,
			allowNull: true
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true
		},
		nutritionalFacts: {
			type: Sequelize.STRING,
			allowNull: true
		}
	},
	options: {
		tableName: 'foods'
	},
	associations: function() {
		sails.models.foods.belongsToMany(sails.models.tags, {
			through: {
			    model: sails.models.foodtag,
			    unique: false
			},
			as: 'tags',
			foreignKey: {
				name: 'foodId',
				unique: false
			}
		});
	}
};

