const { Service } = require('egg')

class BaseService extends Service {
  async select(){
    return await this.app.mysql.select(this.entity)
  }
  async create(entity){
    let result = await this.app.mysql.insert(this.entity, entity)
    return result.affectedRows > 0
  }
  async update(entity){
    let result = await this.app.mysql.update(this.entity, entity)
    return result.affectedRows > 0
  }
  async destroy(id){
    let result = await this.app.mysql.delete(this.entity, {id})
    return result.affectedRows > 0
  }
}

module.exports = BaseService