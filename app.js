const http= require('http')

const server=http.createServer((req,res)=>{


if(req.url==='/')
{
    res.write(req.url)
} 

res.end('<h1>Oops not found </h1> <a href='/'> home </a>')
    
})
server.listen(5000)