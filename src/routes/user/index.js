/*
 * @Description: 用户
 * @Date: 2021-07-07 20:30:57
 * @LastEditTime: 2021-07-11 12:04:37
 */

const router = require("koa-router")();
const { userLogin, userGetAll, userCreate, userDel } = require("../../controllers/user");

router.prefix("/user");

//  用户登录
router.post("/login", userLogin);

//  获取所有用户
router.get("/all", userGetAll);

//  创建用户
router.post("/create", userCreate);

//  删除用户
router.post("/del", userDel);

module.exports = router