/*
 * @Description: 数据库连接配置
 * @Date: 2021-07-10 21:26:34
 * @LastEditTime: 2021-07-29 14:30:01
 */

const mongoose = require("mongoose");
const { mongodbUrl, mongodbUser, mongodbPass } = require("./key")
module.exports = () => {
    
    
    /**
     * 配置数据库连接
     */
    mongoose.connect(mongodbUrl, {
        // user: mongodbUser,
        // pass: mongodbPass,
        dbName:"vite",  //  数据库名称
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })

    /**
     * 数据库连接成功
     */
    mongoose.connection.on("connected", () => {
        console.log("数据库连接成功！");
    })

    /**
     * 数据库连接失败
     */
    mongoose.connection.on("error", (err) => {
        console.error(`数据库连接失败：${err}`);
    })

    /**
     * 数据库断开
     */
    mongoose.connection.on("disconnected", () => {
        console.warn('数据库连接断开！');
    })
}