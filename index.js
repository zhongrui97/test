const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('A-start');
  await next();
  console.log('A-end');
});

app.use(async (ctx, next) => {
  console.log('B-start')
  await next();
  console.log('B-end');

});




app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);