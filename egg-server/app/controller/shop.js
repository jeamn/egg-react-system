'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'ShopController';
  }
}

module.exports = ShopController;
