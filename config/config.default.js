/* eslint valid-jsdoc: "off" */

'use strict';

require('babel-register')({
  plugins: [
    'transform-decorators-legacy',
  ],
});

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = appInfo.name + '_1558595032295_9433';

  //mysql config
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'rms-inspection',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }

  };

  // egg cluster config
  // config.cluster = {
  //   listen: {
  //     port: 8087,
  //     hostname: '127.0.0.1',
  //   },
  // };

  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // credentials: true  //此场景, origin不能为*
  };

  config.logger = {
    outputJSON: true,
  }

  config.eggExtend = {
    app:true,
    agent:true,
    /**
     * 微服务名称
     */
    name: "rms-inspection1",
    /**
     * 注册中心地址
     */
    discovery: {
      serverAddr: "192.168.1.110:8848",
      // namespace: "public"
    },
    // local:{
    //   port:8090
    // }
  };

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    // ...userConfig,
  };
};
