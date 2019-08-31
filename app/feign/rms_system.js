
const {feign}=require("egg-extend/feign");

@feign("rms-system")
class RmsSystem{
    constructor(app){
        this.app=app;
    }

    /**
     * 所有函数首行需要展开参数。其中第一个参数为运行时注入的
     */
    @feign.resource("/Hello")
    async getUser(obj){
        // const [balanceUrl,a1,b1]=[...arguments];
        return JSON.stringify(obj);// `${balanceUrl},${a},${b}`;
    }
}

module.exports=RmsSystem;