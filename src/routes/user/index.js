/*
 * @Description: 用户
 * @Date: 2021-07-07 20:30:57
 * @LastEditTime: 2021-07-11 09:54:44
 */

const router = require("koa-router")();
const { userLogin, userGetAll } = require("../../controllers/user");

router.prefix("/user");

//  用户登录
router.post("/login", userLogin)

//  获取所有用户
router.get("/all", userGetAll);

module.exports = router