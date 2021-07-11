/*
 * @Description: 
 * @Date: 2021-07-11 09:48:48
 * @LastEditTime: 2021-07-11 10:01:41
 */
const jwt = require("jsonwebtoken");
const { jwtScrentKey } = require("../../utils/jwt/secretKey");
const userSchema = require("../../models/user");


/**
 * 用户登陆
 * @param {*} ctx 
 */
const userLogin = (ctx) => {
    console.log(ctx);
    const { username, password } = ctx.request.body;
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({
            username,
            password
        }, jwtScrentKey, { expiresIn: "100d" })
        ctx.body = {
            status: true,
            msg: "登陆成功",
            token: `Bearer ${token}`
        }
    } else {
        ctx.body = {
            status: false,
            msg: "用户名和密码不匹配"
        }
    }
}

/**
 * 获取所有用户
 * @param {*} ctx 
 */
const userGetAll = async (ctx) => {
    await userSchema.find()
        .then(res => {
            ctx.body = {
                status: true,
                msg: "查询成功",
                data: res
            }
        })
        .catch(e => {
            ctx.body = e;
        })
}

module.exports = {
    userLogin,
    userGetAll,
}