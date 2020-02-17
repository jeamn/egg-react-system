
const BaseController =require('./base')
class ShopController extends BaseController {
  constructor(...args){
    super(...args)
    this.entity = 'shop'
  }
}
module.exports = ShopController;
