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
		calories: {
            type: Sequelize.STRING,
            allowNull: true
        },
        carbs:{ 
            type: Sequelize.STRING,
            allowNull: true
        },
        proteins: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fat:{ 
            type: Sequelize.STRING,
            allowNull: true
        }, 
        sugar:{ 
            type: Sequelize.STRING,
            allowNull: true
        }, 
        sodium:{
            type: Sequelize.STRING,
            allowNull: true
        },
        transfat:{
            type: Sequelize.STRING,
            allowNull: true
        },
        fiber:{
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

