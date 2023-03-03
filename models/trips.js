const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class trips extends Model {}

trips.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true 
        },
         image_url:{
            type:DataTypes.STRING,
            allowNull:false,
        },
          rating:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
         city:{
            type:DataTypes.STRING,
            allowNull:false,
        },
           name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false,
        },

        // added this! DOUBLE CHECK THIS?
        trips_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'trips',
              key: 'id',
            },
            // added this! DOUBLE CHECK THIS?
          },
          destinations_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'trips',
              key: 'id',
            },
          },
        
    },
    
    // Every foreign key must define an ON DELETE clause, and in 99% of the cases this should be set to CASCADE
    // FOREIGN KEY  for TRIPS?
    // FOREIGN KEY FOR DESTINATIONS?

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
      }
);

module.exports = trips;


