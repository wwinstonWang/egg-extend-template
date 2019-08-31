'use strict';

const Controller =require("egg-extend");

class UserController extends Controller {
    get model(){
        const { ctx } = this;
        return ctx.model.Company;
    }

    
}
module.exports = UserController;

