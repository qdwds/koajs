/*
 * @Description: 
 * @Date: 2021-07-11 08:38:12
 * @LastEditTime: 2021-07-11 11:32:25
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    //  0   管理员  
    //  1   普通
    role: {
        type: Number,
        default: 0
    },
    isDel: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("users", userSchema);