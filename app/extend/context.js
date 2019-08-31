
module.exports={
    /**
     * 获取当前请求登陆用户身份
     */
    get uid(){
        return this.request.header["authorization-sysaccount"];
    }
}