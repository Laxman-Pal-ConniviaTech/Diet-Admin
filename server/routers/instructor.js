const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructor")

// GET All Instructors
router.get("/", instructorController.getAllInstructor);

// POST Instructors
router.post("/add-users", instructorController.addInstructor );


  module.exports = router