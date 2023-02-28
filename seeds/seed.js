const sequelize = require('../config/connection');
const { User,Traveller,image,destinations } = require('../models');

const destinationData = require('./destinationData.json');
const travellerData = require('./travellerData.json');

const seedDatabase = async () => {
  try{
    await sequelize.sync({ force: true });
      await destinations.bulkCreate(destinationData, {
      individualHooks: true,
      returning: true,
    });
    // await here
    // bulk create more models await syntax.. one after another
    process.exit(0);
  } catch(err){
    console.log(err)
  }

  // 

  
  


  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

};

seedDatabase();
