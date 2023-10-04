const Router = require('koa-router')
const product = require('./products')

const routes = new Router();


const logMidelware=async(ctx,next)=>{
    console.log('request\n', ctx.request.url);
   
   await next();
    console.log('respons\n',ctx.response.body);
}

routes.get('/product/:productId', product.get );
routes.post('/product', product.add);

module.exports=routes;
