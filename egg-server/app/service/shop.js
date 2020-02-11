const { Service } = require('egg')

class ShopService extends Service {
  async list() {
    let result = await this.app.mysql.select('shop2')
    return result
  }
}

module.exports = ShopService