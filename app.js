/*
 * @Description: 
 * @Date: 2021-07-07 10:54:16
 * @LastEditTime: 2021-07-07 21:24:14
 */
const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const passport = require("koa-passport");
const routes = require('./routes');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

//  jiaoyan
app.use(passport.initialize())
app.use(passport.session())


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routes.forEach(r =>{
  app.use(r.routes(),r.allowedMethods());
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
