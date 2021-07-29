/*
 * @Description: curd
 * @Date: 2021-07-29 11:17:16
 * @LastEditTime: 2021-07-29 15:30:27
 */

const mongoose = require("mongoose");
const moment = require("moment");


const curdSchema = new mongoose.Schema({
    create_date: {
        type: Date,
        default: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    name: {
        type:String,
        required:true,
    },
    age: Number,
    sex: String,
    class: Number,
    isDel: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("curds", curdSchema);