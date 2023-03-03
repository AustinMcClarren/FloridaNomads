const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class image extends Model {}

image.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        filename:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
      }
);

module.exports = image;