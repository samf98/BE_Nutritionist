module.exports = {
	attributes: {
		calories: {
            type: Sequelize.STRING,
            allowNull: false
        },
        carbs:{ 
            type: Sequelize.STRING,
            allowNull: false
        },
        proteins: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fat:{ 
            type: Sequelize.STRING,
            allowNull: false
        }, 
        sugar:{ 
            type: Sequelize.STRING,
            allowNull: false
        }, 
        sodium:{
            type: Sequelize.STRING,
            allowNull: false
        },
        transfat:{
            type: Sequelize.STRING,
            allowNull: false
        },
        fiber:{
            type: Sequelize.STRING,
            allowNull: false
        },
        foodId:{
            type: Sequelize.STRING,
            allowNull: false
        },
	},
	options: {
		tableName: 'nutritionfacts'
	},
};