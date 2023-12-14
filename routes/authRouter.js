const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/authController");

router.get("/index", auth_controller.index_test);
router.get("/sign-up", auth_controller.sign_up_get);
router.post("/sign-up", auth_controller.sign_up_post);
router.post("/log-in", auth_controller.log_in_post);
router.get("/log-out", auth_controller.log_out_get);


module.exports = router;



