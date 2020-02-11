// 'use strict';

const { Controller } = require('egg');

class ShopController extends Controller {
  async index() {
    const { ctx, service } = this;
    let shops = await service.shop.list()
    ctx.body = {
      code: 0,
      data: shops
    };
  }
}

module.exports = ShopController;
