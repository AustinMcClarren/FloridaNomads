const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer'); 
const path = require('path');

const storage = multer.diskStorage({destination: function(req, file, cb){
  cb(null, './public/images')
},filename:function(req, file, cb){
  cb(null, file.fieldname+'-' + Date.now()+path.extname(file.originalname))
}})
const upload = multer({storage:storage})



//start of multer
router.post('/upload', upload.single('IMAGE'), (req, res)=> {
  console.log(req.file);
  res.render('profile');
}) 




router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
