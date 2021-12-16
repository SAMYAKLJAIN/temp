const express=require('express');
const products = require('./product.js');
const app=express();
const product=require('./product.js')

app.get('/',(req,res)=>{

    res.send('<h1>Home Page</h1><a href="/api/products">product </a>');
    })

    app.get('/all',(req,res)=>{
res.json(products)
    
        })
    


app.get('/api/products',(req,res)=>{
const newproducts =product.map((product)=>{
const {id,price}=product
return {id,price}

})
res.json(newproducts);

})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params)
const {productID} =req.params;


const singleProduct = products.find((product)=>product.id === productID )
if(!singleProduct)
{
    return res.status(404).send("Out of stock")
}
res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewsID',(req,res)=>
{


    console.log(req.params)
})

app.get('/api/v1/query',(req,res)=>{


const {search,limit}=req.query
let sortedProducts=[...products]
if(search)
{
    sortedProducts=sortedProducts.filter((anytg)=>{return anytg.name.startsWith(search)})

}
if(limit)
{
    sortedProducts=sortedProducts.slice(0,Number(limit))

}
if(sortedProducts.length<1)
{
   return A  res.send("The prodict is out of stock")
}
    res.status(200).json(sortedProducts)    


})


app.listen(5000,()=>{

    console.log('Server is listening on port 5000....')
})