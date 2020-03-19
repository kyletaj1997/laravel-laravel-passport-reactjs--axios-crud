import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {Redirect as Re,Link} from 'react-router-dom'

function Aboutid(props) {
    const [post , setPost] = useState([])
     
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/products',{
        headers:{Authorization:'Bearer '+localStorage.userToken}
      }).then(res=>{
        let Json = res.data
         setPost(Json.data)
        }).catch(error=>{
          console.log(error)
      })
    },[])
  
      return (
          <div> 
              {post.map(post =>(
                  <h2 key={post.id}> 
                  <Link to={'/About/'+post.id} >
                  {post.name}
                  </Link>
                  </h2>
              ))}
          </div>
      );    
}

export default Aboutid;