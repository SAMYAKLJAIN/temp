const express=require('express');
const { send } = require('express/lib/response');
require('dotenv').config()
const app=express();
const jwt=require('jsonwebtoken');
const { toPlainObject } = require('lodash');
let refershtokens=[]
app.use(express.json())
app.get("/posts",authenticationtoken,(req,res)=>{
    res.json( posts.filter(post=>post.username === req.user.name))
   
   
   })

app.post("/login",(req,res)=>{

    
    const username=req.body.username
    const user={name : username}
    
    const access=generateAccessToken(user)
    const refreshToken=jwt.sign(user,process.env.refresh_token);
    refershtokens.push(refreshToken)
    console.log("new refresh token "+refershtokens)
    res.json({
    
        access:access,refreshToken:refreshToken
    })
    
    })

    function generateAccessToken(user)
    {
        return jwt.sign(user,process.env.access_token_secret,{expiresIn:'15s'});
    }

app.listen(4000,()=>{


    console.log("Port 4000 is listening...")
})

function authenticationtoken(req,res,next){
    const authHeader =req.headers['authorization']
    const Token=authHeader&&authHeader.split(' ')[1]
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



app.post('/token',(req,res)=>
{


    const refershtoken=req.body.token;
  
    if(refershtoken ==null)
    {
    
    return send("it is empty")
    }
    if(!refershtokens.includes(refershtoken)){
       
        return res.sendStatus(403)
    }
  
    
    jwt.verify(refershtoken,process.env.refresh_token,(err,user)=>{


        if(err)
        
        {console.log("emdfdspty" )  
            return res.json({
                'samyak':err
            })
    
        }else{
           
           const tokens=generateAccessToken({name: user.name})
           res.json({'newtokenare':  tokens})
        }
        
    } 
    )})

    app.delete('/logout',(req,res)=>{
        console.log(refershtokens)
refershtokens =refershtokens.filter(token=>token !==req.body.token)
console.log(refershtokens)
res.sendStatus(204)

    })