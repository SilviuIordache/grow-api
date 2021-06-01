const express = require('express');

const pillarController = require('./../controllers/pillarController');

const router = express.Router();

router
  .route('/')
  .get(pillarController.getAllPillars)
  .post(pillarController.createPillar);

router
  .route('/defaultPillars')
  .post(pillarController.createDefaultPillars)
  .get(pillarController.getDefaultPillars);

module.exports = router;
