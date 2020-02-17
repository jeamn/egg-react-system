const BaseService = require('./base')

class ShopService extends BaseService {
  constructor(...args){
    super(...args)
    this.entity = 'shop'
  }
}

module.exports = ShopService