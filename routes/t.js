/*
 * @Description: 
 * @Date: 2021-07-07 12:04:39
 * @LastEditTime: 2021-07-07 12:05:35
 */
const router = require("koa-router")();

router.get("/a",(ctx)=>{
    ctx.body = "3333"
})

 module.exports = router;