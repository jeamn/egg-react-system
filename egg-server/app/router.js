/*
 * @Author: Jeamn 
 * @Date: 2020-02-12 00:40:47 
 * @Last Modified by: Jeamn
 * @Last Modified time: 2020-02-27 11:52:30
 */
'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
// const getLemoData = require('./getLemoData')
module.exports = async app => {
  // let i = 3532
  // setInterval(() => {
  //   getLemoData(app, i++)
  // }, 3000)

  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('shop', '/api/shop', controller.shop);
  router.resources('user', '/api/user', controller.user);
};