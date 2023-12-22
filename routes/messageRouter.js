const express = require("express");
const router = express.Router();

const account_controller = require("../controllers/accountController");
const message_controller = require("../controllers/messageController");

router.post("/message", message_controller.message_post);
router.post("/message/:id/delete", message_controller.message_delete_post);

module.exports = router;