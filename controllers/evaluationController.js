const Evaluation = require("../models/evaluationModel");
const catchAsync = require("./../utils/catchAsync.js");

exports.createEvaluation = catchAsync(async (req, res, next) => {
  console.log(req.user);
  
  const evaluation = await Evaluation.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      evaluation,
    },
  });
});
