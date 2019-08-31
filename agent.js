class AppNacosHook {
    constructor(app) {
        this.app = app;
    }

    async didReady() {
        console.log("App did ready!"+JSON.stringify(this.app.feign));
    }

    async beforeClose(){
        
    }
}

module.exports=AppNacosHook;