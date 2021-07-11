/*
 * @Description: 
 * @Date: 2021-07-11 08:38:12
 * @LastEditTime: 2021-07-11 09:46:55
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("users", userSchema);