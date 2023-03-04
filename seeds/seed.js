const sequelize = require('../config/connection');
const { User, Traveller, image, destinations, trips} = require('../models');

const destinationData = require('./destinationData.json');
const travellerData = require('./travellerData.json');
const imageData = require('./imageData.json');
// const tripsData = require('./tripsData.json'); // !!!! UNCOMMENT AFTER DATA IS IN TRIPSDATA.JSON !!!!
const userData = require('./userData.json');

const seedDatabase = async () => {
  try { 
    await sequelize.sync({ force: true }); // sync the sequelize models w database
    
    // seed destinations table
    await destinations.bulkCreate(destinationData, {
      individualHooks: true,
      returning: true, 
    });
    
    // seed travellers table
    await Traveller.bulkCreate(travellerData, {
        individualHooks: true,
        returning: true,
    });
    //                                     !!!! UNCOMMENT AFTER IMAGE MODEL HAS mimetype and data fields filled in !!!!
    // // seed images table
    // await image.bulkCreate(imageData, {
    //       individualHooks: true,
    //       returning: true,
    // });

    // // seed trips table                 !!!! UNCOMMENT AFTER DATA IS ENTERED into TRIPSDATA.JSON !!!!
    // await trips.bulkCreate(tripsData, {
    //       individualHooks: true,
    //       returning: true,
    // }); 
    
    // seed user table
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    }); 

    console.log('-------Database Seeding Complete-------')
    
    process.exit(0);

  } catch(err) {
    console.log(err)
  }
};




  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }



seedDatabase();
