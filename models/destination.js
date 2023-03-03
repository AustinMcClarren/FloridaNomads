const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class destinations extends Model {}

destinations.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
   
            
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'destinations',
      }
    
);
module.exports = destinations;