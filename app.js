/*
 * @Description: app 主程序
 * @Date: 2021-07-07 10:54:16
 * @LastEditTime: 2021-07-11 10:39:33
 */
const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const routes = require('./src/routes');
const koaJWT = require("koa-jwt");
const { jwtScrentKey } = require("./src/utils/jwt/secretKey");
const mongoose = require("./configs/mongodb");
const ws = require("./src/ws");


/**
 * mongoose
 */
mongoose();

/**
 * middlewares
 */
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


/**
 * routes
 */
routes.forEach(r => {
  app.use(r.routes(), r.allowedMethods());
})

/**
 * koa-jwt
 */
app.use(
  koaJWT({
    secret: jwtScrentKey
  }).unless({
    path: [
      /^\/user\/login/,
      /^\/file\/path/,
    ]
  })
)

/**
 * webSocket
 */
ws.forEach(ws => {
  ws();
})

/**
 * error-handling
 */
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

/**
 * logger
 */
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


/**
 * error handler
 */
onerror(app);

module.exports = app
