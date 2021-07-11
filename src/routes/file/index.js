/*
 * @Description: 
 * @Date: 2021-07-07 11:34:30
 * @LastEditTime: 2021-07-11 10:00:15
 */
const router = require("koa-router")();

const { fileBlobDownload, filePathDownload, fileBase64Download } = require("../../controllers/file")
router.prefix("/file")

// blob下载
router.get("/blob", fileBlobDownload)

//  path下载
router.get("/path", filePathDownload)

//  base64下载
router.get("/base64", fileBase64Download)


module.exports = router;