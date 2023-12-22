const express = require("express");
const router = express.Router();
const account_controller = require("../controllers/accountController");

router.get("/member", account_controller.member_get);
router.post("/member", account_controller.member_post);
router.get("/admin", account_controller.admin_get);
router.post("/admin", account_controller.admin_post);

module.exports = router;
