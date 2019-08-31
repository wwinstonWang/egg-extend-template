'use strict';

const Controller = require('egg').Controller;
const routerDecorator=require("egg-extend/router_decorator");


class HomeController extends Controller {
  // @routerDecorator.get()
  async get() {
    const { ctx,app } = this;
    return app.feign.rmsSystem.getUser({a:"hello"});
  }

  // @routerDecorator.get("/Test")
  async test() {
    const { ctx } = this;
    return 'I\'m test method';
  }
}

module.exports = HomeController;
