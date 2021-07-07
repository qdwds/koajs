/*
 * @Description: jwt
 * @Date: 2021-07-07 21:39:41
 * @LastEditTime: 2021-07-07 21:44:10
 */

module.exports = async (ctx, next) => {
    console.log("here");
    const {authorization=""} = ctx.request.header;
    const token = authorization.replace("Bearer ", "");
    try{
        const user = jsonwebtoken.verify(token, secret);
        ctx.state.user = user;
    }catch(err){
        ctx.throw(401, err.message); 
    }
    await next(); 
}
