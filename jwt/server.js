const express=require('express')
require('dotenv').config()
const app=express();
const jwt=require('jsonwebtoken')

app.use(express.json())

const posts=[

{ 
    username: "kyle",
    title: 'post 1'
},

{   
    username: "jim",
    title: 'post 2  '
},
{   
    username: "karan",
    title: 'post 2'
}


]
app.get("/posts",authenticationtoken,(req,res)=>{
    console.log(req.user.name+'asas')
 return res.json(posts.filter(post=>post.username === req.user.name))


})

app.post("/login",(req,res)=>{
console.log('samyak')
const username=req.body.username
const user={name : username}

const access=jwt.sign(user,process.env.access_token_secret)
res.json({

    access:access
})

})

app.listen(3000,()=>{


    console.log("Port 3000 is listening...")
})

function authenticationtoken(req,res,next){

    const authHeader =req.headers['authorization']
    var  c=authHeader.split(' ')[1]
    const Token=authHeader&&authHeader.split(' ')[1]
    console.log(c)
    if(Token==null)
    {   
return res.sendStatus(401)    }
jwt.verify(Token,process.env.access_token_secret,(err,user)=>{


    if(err)
    
    {
        return res.sendStatus(403) 

    }else{

        req.user=user
    }
    next()
})



}