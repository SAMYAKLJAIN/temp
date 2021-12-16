const express=require('express')
const app=express()

    let {lists} =require('./db.js')
    app.use(express.urlencoded({extended:false}))
app.use(express.static('../methods-public'))
app.get('/javascript.html', (req, res) => {
res.send('about page ')


})
app.get('/',(req,res)=>
{
let k="/javascript.html"

res.send(k)



})
    app.get('/api/lists',(req,res)=> 
    {
res.status(200).json({success:true,data: lists});

    })
app.post('/login',(req,res)=>{
const {name}=req.body;
console.log(req.body)
if(name)
{
    res.status(200).send('welcome'+name);
}
else{
res.status(404).send('please provide credentials')
}

   
})
    app.listen(5000,()=>{
        console.log('listening to port 5000 ')
    })