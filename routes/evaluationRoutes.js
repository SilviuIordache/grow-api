const express = require("express");
const authController = require('./../controllers/authController');


const evaluationController = require("./../controllers/evaluationController");

const router = express.Router();

router
  .route('/')
  .post(authController.protect, evaluationController.createEvaluation)


module.exports = router;
