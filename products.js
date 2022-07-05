
let productList ={};
const {v4:uuidV4}=require('uuid')
exports.add= async(ctx)=>{
  const product =ctx.request.body
 const productId=uuidV4();
 productList[productId]={
  ...product,
  productId
}
  ctx.status= 200;
    ctx.body={
        productId,
        msg:'product created'
    }
  
}
exports.get = async(ctx) =>{
  const productId=ctx.params.productId;
  ctx.status= 200;
  
  ctx.body={
     productInfo:productList[productId],
      msg:'product get'
  }
  console.log(ctx.body);
}

