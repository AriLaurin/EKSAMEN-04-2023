const { Router } = require("express");//we need the express router to plug into applications
const Controller = require("../controllers/Controller"); //exports our controller to get our functions
const {GetData} = require("../middleware/middleware");
const router  = Router(); ///creates a new router

router.get("/", Controller.home_get);
router.post("/", Controller.home_post);
router.get("/admin", Controller.admin_get);
router.post("/update", Controller.update_post);
router.post("/delete", Controller.delete_post);
router.get("/login", Controller.login_get);
router.post("/login", Controller.login_post);
router.delete("/:id", Controller.home_delete);


module.exports = router;