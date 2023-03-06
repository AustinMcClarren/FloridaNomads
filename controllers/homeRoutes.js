const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//sign up route
router.get("/signup", (req, res) => {
	// If the user is already signup, redirect the request to another route
	if (req.session.signup) {
		res.redirect("/profile");
		return;
	}
 
	res.render("signup");
});


// route to recent travels page, using withAuth middleware
router.get('/recentTravel', withAuth, async (req, res) => { 
  try {
    // Find the logged in user data based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }, //exclude password data for security
      include: [{ model: Project }], // include 'project' model, !!-NEED TO VERIFY IF THIS IS THE CORRECT MODEL TO INCLUDE
    });

    const user = userData.get({ plain: true }); // strip data to pass to handlebars

    res.render('recentTravels', { // renders recent travels
      ...user,
      logged_in: true // pass logged in status to template
    });
  } catch (err) {   
    res.status(500).json(err);
  }
});

module.exports = router;

