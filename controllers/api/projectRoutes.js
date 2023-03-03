const router = require('express').Router();
const { Project, image } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer'); 
const path = require('path');

const storage = multer.diskStorage({destination: function(req, file, cb){
  cb(null, `${__basedir}/public/images`)
},filename:function(req, file, cb){
  cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
}})
const upload = multer({storage:storage})

router.post("/upload", upload.single("IMAGE"), async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.send ("Oops, please choose a file to upload.");
    }
    console.log("req.body", req.file);
    const addImage = await image.create({
      filename: req.file.filename,
      user_id: req.session.user_id,
    })
    res.status(200).json(addImage);
  } catch (err) {
    console.log("Error!", err);
    res.status(400).json(err);
  }
});

router.get("/image", async (req, res) => {
  try {
    const photo = await image.findOne({
      where: {id: req.session.user_id},
      attributes: ["filename"],
    });
    const newPhoto = photo.get({ plain: true });
    console.log("New Photo", newPhoto);
    res.render("image", { ...newPhoto });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.post('/upload/:projectID', async (req, res) => {
//   try {
//     const {imageUrl} = req.body
//   const {projectID} = req.params
//   const newProject = await Project.update({
//     imageUrl
//   },
//   {
//     where: {id: projectID}
//   })
//   res.status(200).json(newProject)
//   } catch (err) {
//     console.log(err)
//     res.status(400).json(err)
//   }
// })
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
