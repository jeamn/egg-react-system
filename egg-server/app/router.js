'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
// const getLemoData = require('./getLemoData')
module.exports = async app => {
  // let i = 3399
  // setInterval(() => {
  //   getLemoData(app, i++)
  // }, 2000)

  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('shop', '/api/shop', controller.shop);
};
