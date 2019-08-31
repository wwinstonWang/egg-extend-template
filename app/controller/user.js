'use strict';

const Controller = require("egg-extend");
const routerDecorator=require("egg-extend/router_decorator");

@routerDecorator.prefix("/User")
class UserController extends Controller {
    get model(){
        const { ctx } = this;
        return ctx.model.User;
    }

    @routerDecorator.get("/Test")
    async get() {
        const { ctx } = this;
        return 'UserController Test';
    }
}
module.exports = UserController;

