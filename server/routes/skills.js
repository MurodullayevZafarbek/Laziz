const express = require('express');
const { index, show, create, update, remove } = require('../controllers/skills');
const router = express.Router();
const multer = require('multer')

//set file Storage
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      switch (file.fieldname) {
         case 'imageSkills':
            cb(null, './public/images/skills'); break;
         case "imagePortfolio":
            cb(null, './images/portfolio'); break;
      }
      },
   filename: function (req, file, cb) {
      console.log("filename", file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.originalname.split(".")[file.originalname.split(".").length-1])
   }
})

const upload = multer({ storage: storage })

/* GET All skils. */
router.get('/', index);

/* GET a skil. */
router.get('/:id', show);

/* Create a skil. */
router.post('/', upload.single('imageSkills'), create);

/* Update a skil. */
router.put('/', update);

/* Delete a skil. */
router.delete('/', remove);

module.exports = router;