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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
                unique: true
            }
        },

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