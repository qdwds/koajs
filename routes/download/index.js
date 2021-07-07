/*
 * @Description: 
 * @Date: 2021-07-07 11:34:30
 * @LastEditTime: 2021-07-07 17:47:20
 */
const router = require("koa-router")();
const send = require('koa-send');
const sendfile = require('koa-sendfile');
const { resolve } = require("path");
const {createReadStream, readFile} = require("fs")
router.prefix("/file")

//  文件流下载
router.get("/blob", async (ctx, next) => {
    const path =  '/public/images/git.png' 
    ctx.attachment(path);
    await send(ctx,path);
})

//  根据地址文件下载
router.get("/path", async (ctx, next) => {
    const path = "http://localhost:5000/images/weixin.zip";
    ctx.body = path
})

router.get("/base64",(ctx)=>{
    const path =  resolve(__dirname,"../../public/images/weixin.zip");
    console.log(path);
    readFile(path,'binary',function(err,data){
        if(err){
            ctx.body = false
        }else{
            const buffer = new Buffer(data, 'binary');
            let img = 'data: image/'+'weixin.zip' +';base64,' + buffer.toString('base64');
            ctx.body = img
        }
    });
})

function getImageType(str){
    var reg = /\.(png|jpg|gif|jpeg|webp)$/;
    return str.match(reg)[1];
}


module.exports = router;