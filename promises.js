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
    function ceratePosts(post)
    { return new Promise((res,rej)=>{  setTimeout(()=>{
        posts.push(post);
        const er=false;
        if(!er)
        {
            res();
        } 
        else{
            rej('Error something went wrong ');
        }

    },2000);
    });
    }

    ceratePosts({title:'post by samyak','body':'this is post three' }).then(getPosts);
    console.log(posts,);
    
    
    
    