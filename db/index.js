/*
 * @Description: mongoose
 * @Date: 2021-07-10 21:26:34
 * @LastEditTime: 2021-07-10 21:34:59
 */

const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://admin@47.104.64.204:27017/?authSource=vite", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(_ => {
            console.log("数据库连接成功");
        })
        .catch(err => {
            console.error(`数据库连接失败：${err}`);
        })
}