import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {Redirect as Re,Link} from 'react-router-dom'

function About(props) {
    const [post , setPost] = useState([])
    const [name , setName] = useState('')
    const [price , setPrice] = useState()

    useEffect(()=>{
   get()
    },[])

    const get= ()=> {
      axios.get('http://127.0.0.1:8000/api/products',{
        headers:{Authorization:'Bearer '+localStorage.userToken}
      }).then(res=>{
        let Json = res.data
         setPost(Json.data)
        }).catch(error=>{
          console.log(error)
      })
    }

  const submitDelete = (id)=> {
    axios.delete('http://127.0.0.1:8000/api/products/'+id,{
        headers:{Authorization:'Bearer '+localStorage.userToken}
      }).then(res=>{
        get()
        }).catch(error=>{
      
      })
  }


  const submitHandler = (e) => {
   
    axios.post('http://127.0.0.1:8000/api/products/',{name:name,price:price},{
      headers:{Authorization:'Bearer '+localStorage.userToken}
        }).then(res=>{   
           get()
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
  } 

  

      return (
          <div className="wew"> 
              {post.map(post =>(
                <div>
                    <h2 key={post.id}> 
                    NAME:{post.name} and PRICE :{post.price}
                    </h2>

                    <Link to={'/About/'+post.id} ><button>Edit</button>  </Link>
                    <button onClick={()=>submitDelete(post.id)}>Delete</button>
                  </div>
              ))}



           <div className="log-container">
                <label for="uname"><b>Name</b></label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>

                <label for="psw"><b>price</b></label>
                <input type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <button onClick={submitHandler}>click</button>
            </div>

          </div>
      );    
}

export default About;