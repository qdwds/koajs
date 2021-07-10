/*
 * @Description: 
 * @Date: 2021-07-07 10:54:16
 * @LastEditTime: 2021-07-10 21:32:48
 */
const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const routes = require('./routes');
const koaJWT = require("koa-jwt");
const { jwtScrentKey } = require("./utils/jwt/secretKey");
require("./ws");

const mongoose = require("./db")
// error handler
onerror(app);

//  mongoose
mongoose();


// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

//  koa-jwt
app.use(
  koaJWT({
    secret: jwtScrentKey
  }).unless({
    path: [
      /^\/user\/login/,
      /^\/file\/path/
    ]
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routes.forEach(r => {
  app.use(r.routes(), r.allowedMethods());
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

//  websocket

module.exports = app
