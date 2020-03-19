import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {Redirect as Re,Link} from 'react-router-dom'

function Aboutid(props) {
    const [post , setPost] = useState({})
    const [name , setName] = useState('')
    const [price , setPrice] = useState()
    const [redirect, setRedirect] = useState(false)


    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/products/'+props.match.params.id,{
        headers:{Authorization:'Bearer '+localStorage.userToken}
      }).then(res=>{
        let Json = res.data
         setPost(Json.data)
         setName(Json.data.name)
         setPrice(Json.data.price)
        }).catch(error=>{
          console.log(error)
      }) 
    },[])

     const submitHandlers = (e) => {
      
        axios.put('http://127.0.0.1:8000/api/products/'+props.match.params.id,{name:name,price:price},{
            headers:{Authorization:'Bearer '+localStorage.userToken}
            }).then(res=>{
                let responseJson = res
                if(res.data){
        
                    setRedirect(true)
                }
                console.log(responseJson)
            }).catch(error=>{
                console.log(error)
            })
      } 

      
    if(redirect == true) {
        return (<Re to='/About' />)
     }   
 
  
      return (
          <div> 
              <h1><input type="text" value={name} onChange={e=>setName(e.target.value)} /></h1>
              <h1><input type="text" value={price} onChange={e=>setPrice(e.target.value)} /></h1>
              <button onClick={submitHandlers}>click</button>
          </div>
      );    
}

export default Aboutid;