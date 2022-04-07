const express = require("express");
const router = express.Router();
const userController = require("./../controller/userController");

router
    .route("/home")
    .post(userController.Home);

router
    .route("/contact")
    .post(userController.Contact);

module.exports = router;