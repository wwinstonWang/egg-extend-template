'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  eggExtend:{
    enable: false,
    package: 'egg-extend',
  }
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
