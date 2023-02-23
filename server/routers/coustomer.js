const express = require("express");
const router = express.Router();
const coustomersController = require("../controllers/coustomer")

router.get("/coustomers" , coustomersController.getCoustomer)

module.exports = router