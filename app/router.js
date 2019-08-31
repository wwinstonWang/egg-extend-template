'use strict';
const routerDecorator=require("egg-extend/router_decorator");


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  routerDecorator.initRouter(app);

  // router.get('/', controller.home.index);
  router.resources("user",'/User',controller.user);
  router.resources("company",'/Company',controller.company);
};
