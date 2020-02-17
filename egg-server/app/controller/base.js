// 'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  success(data){
    this.ctx.body = {code: 0, data}
  }
  error(error){
    this.ctx.body = {code: 1, error}
  }
  async index() {
    const { ctx,service } = this;
    let result = await service[this.entity].select()
    this.success(result)
  }
  async create() {
    const { ctx, service } = this;
    let entity = ctx.request.body
    let result = await service[this.entity].create(entity)
    result ? this.success('创建成功') : this.error('创建失败')
  }
  async update() {
    const { ctx, service } = this;
    let id = ctx.params.id
    let entity = ctx.request.body
    entity.id = id
    let result = await service[this.entity].update(entity)
    result ? this.success('更新成功') : this.error('更新失败')
  }
  async destroy() {
    const { ctx, service } = this;
    let id = ctx.params.id
    let result = await service[this.entity].destroy(id)
    result ? this.success('删除成功') : this.error('删除失败')
  }
}

module.exports = BaseController;
