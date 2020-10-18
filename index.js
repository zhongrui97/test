const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('A-start');
  await next();
  console.log('A-end');
});

app.use(async (ctx, next) => {
  console.log('BBBBB-start')
  await next();
  console.log('BBBBB-end');

});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
