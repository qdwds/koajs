/*
 * @Description: 用户
 * @Date: 2021-07-07 20:30:57
 * @LastEditTime: 2021-07-07 21:43:26
 */

const router = require("koa-router")();
const jwt = require("jsonwebtoken");
// router.prefix("/user")
const auth = require("../../middleware/jwt")

router.post("/user",(ctx,next) =>{
    console.log(ctx.request);
    console.log(ctx.request.body);
    const {username ,password} = ctx.request.body;
    if(username === "admin" && password ==="admin"){
        const token = jwt.sign({
            username,
            password
        },"scrent",{expiresIn:"1h"})
        ctx.body = {
            success:true,
            msg:"登陆成功",
            token:`Bearer ${token}`
        }
    }else{
        ctx.body = {
            success:false,
            msg:"用户名和密码不匹配"
        }
    }
})

router.get("/test",auth,(ctx)=>{
    ctx.body = "test"
})
module.exports = router