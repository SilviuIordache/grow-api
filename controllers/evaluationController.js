const Evaluation = require("../models/evaluationModel");
const catchAsync = require("./../utils/catchAsync.js");
const User = require("./../models/userModel");

exports.createEvaluation = catchAsync(async (req, res, next) => {
  const evaluation = await Evaluation.create(req.body);

  //save evaluation id in user's evaluations array
  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: {
      evaluations: evaluation._id,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      evaluation,
    },
  });
});
