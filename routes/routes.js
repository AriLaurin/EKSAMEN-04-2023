const { Router } = require("express");//we need the express router to plug into applications
const authController = require("../controllers/Controller"); //exports our controller to get our functions
const {GetData} = require("../middleware/middleware");
const router  = Router(); ///creates a new router

router.get("/", authController.home_get);
router.post("/", authController.home_post);

module.exports = router;