// THIS WILL TAKE THEM TO THERE PROFILE PAGE. THEY CAN SEE THERE INFORMATION/ UPLOADS

const router = require('express').Router();
const { User } = require('../models');



//GET ALL USER DATA
router.get('/', async (req, res) => {
    // Retrieve UUID from the database using Sequelize
    const uuid = await User.findOne({
      where: { id: req.params.id }
    });
  
    // Render the homepage and pass in the UUID as a variable
    res.render('home', { uuid });
  });




// GETS THE PROFILE INFO THAT MATCHES THER ID. ONLY THEY CAN SEE?
router.get('/profile', async (req, res) => {
    // Retrieve UUID from the database using Sequelize
    const uuid = await User.findOne({
      where: { id: req.session.user_id}
    });
  
    // Render the profile page and pass in the UUID as a variable
    res.render('profile', { uuid });
  });




// CREATE A POST/ UPLOAD A PICTURE?

module.exports = router;


