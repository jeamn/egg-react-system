/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581144814252_8257';

  // add your middleware config here
  config.middleware = [];
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      client: {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'jeamn2020',
        database: 'lemo_data'
      }
    }
  };
  // 跨域配置
  userConfig.security = {
    csrf: false
  }
  config.cors = { origin: '*', allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' }

  return {
    ...config,
    ...userConfig,
  };
};
