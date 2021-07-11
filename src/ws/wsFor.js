/*
 * @Description: 
 * @Date: 2021-07-11 14:20:32
 * @LastEditTime: 2021-07-11 15:21:29
 */

const websocket = require("ws");
const server = new websocket.Server({
    port: 5002,
    path: "/ws/for"
})

module.exports = () => {
    server.on("connection", ws => {
        for (let i = 0; i < 100000; i++) {
            ws.send(`传输的数据为：${i}`);
        }
    })
}