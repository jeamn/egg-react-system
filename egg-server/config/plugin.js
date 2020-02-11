'use strict';

exports.mysql = {
  package: 'egg-mysql',
  enable: true // 是否启动
}

// 跨域配置
exports.cors = { enable: true, package: 'egg-cors' }