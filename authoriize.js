const  authorised=(req,res,next)=>
{
const {user}=req.query;
if(user==="samyak")
{
    req.user={name:'john', id:3}
    next()
}
else{
res.status(200).send("Unauthorized")

}

    console.log('authorise')
    next()
}

module.exports=authorised