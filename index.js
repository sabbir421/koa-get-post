const koa = require('koa')
const koaBody = require('koa-body');
const route = require('./routes');

app = new koa();
app.use(koaBody())
app.use(route.routes())
app.use(route.allowedMethods())

app.listen(8081,()=>{
  
    console.log('server start....');
})