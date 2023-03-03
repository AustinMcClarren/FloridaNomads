const User = require('./User');
const Project = require('./Project');
const Traveller = require('./Traveller');
const destinations = require('./destination');
const image = require('./image');
const trips = require('./trips');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Traveller.hasMany(destinations, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE'
});

destinations.hasMany(Traveller, {
  onDelete: 'CASCADE',
});

image.hasMany(destinations, {
  onDelete: 'CASCADE'
});

trips.hasMany(destinations,{
  onDelete: 'CASCADE',
  foreignKey:'destinations_id'

});





module.exports = { User, Project,Traveller,image,destinations,trips };
