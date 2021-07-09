/*
 * @Description: websoket 连接测试
 * @Date: 2021-07-09 10:48:23
 * @LastEditTime: 2021-07-09 15:15:35
 */


const websocket = require("ws");
const moment = require("moment");
const server = new websocket.Server({
    port: 5001,
    path: "/ws"
})
let item = null;
server.on('connection', ws => {
    ws.on('message', msg => {
        ws.send(`服务端：接收到的数据为 ${msg}`);
        console.log(msg);
    });

    
    ws.on("error",()=>{
        clearInterval(item);
    })

    
    ws.send('websocket 连接成功 !');
    item = setInterval(()=>{
        ws.send(`服务端：我主动发送 ${moment().format()}`)
    },3000)

    
});
