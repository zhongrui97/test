const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('AA-start');
  await next();
  console.log('AA-end');
});

app.use(async (ctx, next) => {
  console.log('BB-start')
  await next();
  console.log('BB-end');

});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);