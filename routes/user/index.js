/*
 * @Description: 用户
 * @Date: 2021-07-07 20:30:57
 * @LastEditTime: 2021-07-08 11:47:16
 */

const router = require("koa-router")();
const jwt = require("jsonwebtoken");
router.prefix("/user")
const { jwtScrentKey } = require("../../utils/jwt/secretKey")

//  用户登录
router.post("/login", (ctx) => {
    const { username, password } = ctx.request.body;
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({
            username,
            password
        }, jwtScrentKey, { expiresIn: "1d" })
        ctx.body = {
            success: true,
            msg: "登陆成功",
            token: `Bearer ${token}`
        }
    } else {
        ctx.body = {
            success: false,
            msg: "用户名和密码不匹配"
        }
    }
})

router.get("/test", async (ctx) => {
    ctx.body = "test"
})
module.exports = router