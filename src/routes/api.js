const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const blogDetailsController = require('../controllers/blogDetailsController')
const commentController = require('../controllers/commentController')
const messageController = require('../controllers/messageController')
const portfolioController = require('../controllers/portfolioController')
const productController = require('../controllers/productController')
const profitController = require('../controllers/profitController')
const projectController = require('../controllers/projectController')
const serviceController = require('../controllers/serviceController')
const titleController = require('../controllers/titleController')


router.get("/blogcreate",blogController.create);
router.get("/blogread",blogController.read);
router.get("/blogdelete",blogController.delete);
router.get("/blogupdate",blogController.update);

router.get("/blogdetailscreate",blogDetailsController.create);
router.get("/blogdetailsread",blogDetailsController.read);
router.get("/blogdetailsdelete",blogDetailsController.delete);
router.get("/blogdetailsupdate",blogDetailsController.update);

router.get("/commentcreate",commentController.create);
router.get("/commentread",commentController.read);
router.get("/commentdelete",commentController.delete);
router.get("/commentupdate",commentController.update);

router.get("/messagecreate",messageController.create);
router.get("/messageread",messageController.read);
router.get("/messagedelete",messageController.delete);
router.get("/messageupdate",messageController.update);

router.get("/portfoliocreate",portfolioController.create);
router.get("/portfolioread",portfolioController.read);
router.get("/portfoliodelete",portfolioController.delete);
router.get("/portfolioupdate",portfolioController.update);

router.get("/productcreate",productController.create);
router.get("/productread",productController.read);
router.get("/productdelete",productController.delete);
router.get("/productupdate",productController.update);

router.get("/profitcreate",profitController.create);
router.get("/profitread",profitController.read);
router.get("/profitdelete",profitController.delete);
router.get("/profitupdate",profitController.update);

router.get("/projectcreate",projectController.create);
router.get("/projectread",projectController.read);
router.get("/projectdelete",projectController.delete);
router.get("/projectupdate",projectController.update);

router.get("/servicecreate",serviceController.create);
router.get("/serviceread",serviceController.read);
router.get("/servicedelete",serviceController.delete);
router.get("/serviceupdate",serviceController.update);

router.get("/titlecreate",titleController.create);
router.get("/titleread",titleController.read);
router.get("/titledelete",titleController.delete);
router.get("/titleupdate",titleController.update);









module.exports=router;