const express=require('express')
const fs =require('fs')
const bodyParser=require('body-parser')
const app=express();
const products=require('./list.js')

app.set("view engine","ejs");

app.use(express.static("public"))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/todo",(req,res)=>
{
res.json(products)
// const p=products;
// res.send(p)    
    // res.render("list",{newlistitem:["sa"]})
    
    console.log("in get")
})

app.get("/todo/:id",setTodo,(req,res)=>
{  console.log("in get")

    console.log(req.product)
    res.send(req.product)
// const p=products;
// res.send(p)    
    // res.render("list",{newlistitem:["sa"]})
    
  
})

app.put("/todo/:id",setTodo,(req,res)=>{

  
   var pos= products.indexOf(req.product)
   var d=req.body
   d["id"]=req.params.id;

   products[pos]=d;

    //writefilesync 
    
    res.json( products[pos])

}
)

app.post("/todo",(req,res)=>{

    products.push(req.body)  //writefilesync 
    
    res.json(req.body)

    // res.redirect("/")
})


// app.delete("/delete",(req,res)=>{

//     i1.pop();
//     res.redirect("/")
// })
app.listen(5000,()=>{

    console.log("listening port 5000")
})


function setTodo(req,res,next)
{
    const id=req.params.id;
    req.product= products.find(product=>product.id==Number(id))

    next()
}
// getting data in the setInterval


app.get()