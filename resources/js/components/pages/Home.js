import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Redirect as Re} from 'react-router-dom'


function Home() {
 const [email , setEmail] = useState('')
 const [password , setPassword] = useState('')

 const [redirect, setRedirect] = useState(false)


 const submitHandler = (e) => {
   
    axios.post('http://127.0.0.1:8000/api/login',{email:email,password:password},{

        headers:{'Content-type':'application/json'}
        }).then(res=>{
            let responseJson = res
            if(res.data){
                localStorage.setItem('userToken',res.data.token)
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
    
            <div className="log-container">
                <label for="uname"><b>Username</b></label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>

                <label for="psw"><b>Password</b></label>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button onClick={submitHandler}>click</button>
            </div>

    );
}

export default Home;