const { Router } = require('express');
const userRouter = require('./user');
const mainRouter = new Router();

mainRouter.use('/user', userRouter);

module.exports = mainRouter;