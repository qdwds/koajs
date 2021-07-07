/*
 * @Description: passport 
 * @Date: 2021-07-07 21:22:53
 * @LastEditTime: 2021-07-07 21:22:53
 */


module.exports = passport => {
    app.use(passport.initialize())
    app.use(passport.session())
}