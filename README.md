# egg-extend-template
基于egg-extend框架的模板项目



1. 项目描述

   项目基于egg-extend框架。模板项目提供基于样例代码帮助开发者快速上手，在几分钟内实现一个基于restful规范的后台数据服务，并提供良好的拓展性。

   

2. 运行环境

   node v10.15+

   mysql 5.5

   

3. 配置说明

   1. 项目配置

      配置信息统一在config目录中。其中plugin.js配置项目使用插件，config.default.js配置插件配置信息。

      1. 数据库配置

          config.sequelize = {

         ​    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql

         ​    database: 'rms-inspection',

         ​    host: 'localhost',

         ​    port: 3306,

         ​    username: 'root',

         ​    password: 'root',

         ​    define: {

         ​      freezeTableName: true,

         ​      underscored: true,

         ​      timestamps: false,

         ​    }

           };

      2. cors配置

         config.cors = {

         ​    origin: '*',

         ​    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',

         ​    // credentials: true  //此场景, origin不能为*

           };

      3. nacos配置

         config.eggExtend = {

         ​    app:true,

         ​    agent:true,

         ​    /**

         ​     \* 微服务名称

         ​     */

         ​    name: "rms-inspection1",

         ​    /**

         ​     \* 注册中心地址

         ​     */

         ​    discovery: {

         ​      serverAddr: "192.168.1.110:8848",

         ​      // namespace: "public"

         ​    }

           };

         当项目不需要调用其它微服务时，可以禁用eggExtend插件。

         禁用方式为在plugin.js添加如下代码：

         eggExtend:{

         ​    enable: true,

         ​    package: 'egg-extend',

           }

      

   2. restful控制器

   ```javascript
   const Controller =require("egg-extend");
   
   class UserController extends Controller {
       get model(){
           const { ctx } = this;
           return ctx.model.Company;
       }
   
       
   }
   module.exports = UserController;
   
   自定义类继承自基础控制器，并重写get model方法，返回sequelize模型定义。
   
   对外接口统一为restful风格，通过Get、Post、Put、Delete标识不同操作类型。
   
   为保证微服务调用统一性，现做出如下规定：
   Get、Pos、Put、Delete
   	
   	微服务接口统一返回结果为json对象，格式为：{code：0，msg:””,data:obj}
      其中code为状态,msg描述字符串,data为具体返回的业务数据。
      code值0，表示操作成功，其它情况为操作失败
   
   四、接口类型
   restful风格面向资源，数据中心框架支持以下通用调用方式
   假定资源名为ResourceName
   
   a)	请求多个资源
   Get请求： http://baseUrl/ResourceName
   
   条件过滤：Get请求支持各种参数过滤查询，由于服务面向资源，实现上所有参数过滤条件均为资源属性。
   
   查询分页：请求传参page（页码）、rows(页行数)
   
   结果属性过滤：请求传参    fields，逗号分隔表示要获取的属性。
         excludeFields,逗号分隔表示要排除的属性
   	排序: 请求参数    		  orderSql,排序字段，例如name desc,code asc
   
   资源属性命名规则：默认情况下，资源属性名与数据库中列字段对应规则如下：
   数据库在建模时，约定多个单词的列名以下划线连续，如group_name.
   数据库列在转换为资源时，按照小驼峰式转换规则，group_name转换为groupName
   
   
   b)	请求单个资源
   GET请求：根据主键获取，http://baseUrl/ResourceName/Key
   
   c)	新增资源
   POST请求：http://baseUrl/ResourceName
   支持3种形式的新增操作：
   1、	传统form提交
   仅支持单个新增
   2、	JSON提交(需要设置请求头为JSON)
   1、	单个新增
   直接body体提交json串
   2、	批量新增
        只支持body体提交json串
   
   d)	更新资源
   PUT请求：根据主键更新，http://baseUrl/ResourceName/Key
   	同时支持form提交与json提交
   
   e)	删除资源
   DELETE请求：根据主键删除，http://baseUrl/ResourceName/Key
   
   
   ```

   