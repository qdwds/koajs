/*
 * @Description: mongoose
 * @Date: 2021-07-29 10:42:46
 * @LastEditTime: 2021-07-29 16:01:54
 */

const router = require("koa-router")();
const { c, u, rAll,rOne, dDelete,dIsDel } = require("../../controllers/curd/index.js")
router.prefix("/curd");

//  创建
router.post("/c", c);

//  修改
router.put("/u", u);

//  获取所有
router.get("/rAll", rAll);

//  获取一项
router.post("/rOne", rOne);

//  直接删除
router.delete("/dDelete", dDelete);

// 隐藏
router.post("/dIsDel", dIsDel);


module.exports = router