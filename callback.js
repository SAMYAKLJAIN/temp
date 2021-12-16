
const posts=[

{title: 'post one ',body:'this is view of post one '},
{title: 'post two',body:'this is post two '}

];
function getPosts()
{
    
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
output+=`this is ${post.title}`;

        })

        document.body.innerHTML=output;

    },100);

}
function ceratePosts(post,callback)
{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

ceratePosts({title:'post by samyak','body':'this is post three' },getPosts);
console.log(posts,);



