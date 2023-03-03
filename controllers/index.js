const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoute');


router.use('/', homeRoutes);
router.use('/',profileRoutes);
router.use('/api', apiRoutes);




module.exports = router;
