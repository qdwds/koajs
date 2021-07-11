/*
 * @Description: file
 * @Date: 2021-07-11 09:56:13
 * @LastEditTime: 2021-07-11 09:59:50
 */

const send = require('koa-send');
const { resolve } = require("path");
const { readFile } = require("fs");

/**
 * blob下载
 * @param {*} ctx 
 */
const fileBlobDownload = async (ctx) => {
    const path = '/public/images/git.png'
    ctx.attachment(path);
    await send(ctx, path);
}

/**
 * path下载
 * @param {*} ctx 
 */
const filePathDownload = async (ctx) => {
    const path = "http://localhost:5000/images/weixin.zip";
    ctx.body = path
}

/**
 * base64下载
 * @param {*} ctx 
 */
const fileBase64Download = async (ctx) => {
    const path = resolve(__dirname, "../../public/images/weixin.zip");
    readFile(path, 'binary', function (err, data) {
        if (err) {
            ctx.body = false
        } else {
            const buffer = new Buffer(data, 'binary');
            let img = 'data: image/' + 'weixin.zip' + ';base64,' + buffer.toString('base64');
            ctx.body = img
        }
    });
}

module.exports = {
    fileBlobDownload,
    filePathDownload,
    fileBase64Download,
}