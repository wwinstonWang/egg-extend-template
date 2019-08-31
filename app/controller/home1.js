'use strict';

const Controller = require('./home')
const routerDecorator=require("egg-extend/router_decorator");


@routerDecorator.prefix("/Home1")
class Home1Controller extends Controller {
  @routerDecorator.get("/Test")
  async test() {
    const { ctx } = this;
    return 'I\'m Home1 test method';
  }

  @routerDecorator.get()
  async get() {
    return super.get();
  }
}

module.exports = Home1Controller;
