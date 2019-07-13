module.exports={
    attributes:{
        description:{
            type: Sequelize.STRING,
            allowNull : false
        }
    },
    options:{
        tableName :'categories'
    },
    associations: function(){
        sails.models.categories.belongsToMany(sails.models.users, {
            through: {
                model: sails.models.usercategories,
                unique: false
            },
            as: 'users',
            foreignKey: {
                name: 'categoriesId',
                unique: false
            }
        }); 
    },
    options:{
        tableName:'categories'
    }

}