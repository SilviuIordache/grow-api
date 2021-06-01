const Pillar = require('../models/pillarModel');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync.js');
const pillarsJSON = require('./../dev-data/data/pillars.json');

exports.getAllPillars = catchAsync(async (req, res, next) => {
  const pillars = await Pillar.find();

  if (!pillars) {
    return next(new AppError('No pillars found', 404));
  }

  res.status(200).json({
    status: 'success',
    results: pillars.length,
    data: {
      pillars
    }
  });
});

exports.getDefaultPillars = catchAsync(async (req, res, next) => {
  const pillars = await Pillar.find({ default: true });

  res.status(200).json({
    status: 'success',
    results: pillars.length,
    data: {
      pillars
    }
  });
});

exports.createPillar = catchAsync(async (req, res, next) => {
  const newPillar = await Pillar.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      pillar: newPillar
    }
  });
});

exports.createDefaultPillars = catchAsync(async (req, res, next) => {
  const pillars = await Pillar.insertMany(pillarsJSON.pillars);
  res.status(201).json({
    status: 'success',
    results: pillars.length,
    data: {
      pillars
    }
  });
});
