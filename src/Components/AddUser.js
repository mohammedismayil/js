import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { useState } from 'react'
const AddUser = () => {
    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    
    const addUser =  async (user) => {
        
        const res  = await fetch('http://localhost:5000/user_list',{
          method:'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify(user)
        })
        const data = await res.json()
      
        // setTasks([...tasks, data])
      }
      const onSubmit = (e) => {
        e.preventDefault();
        
        if (!username){
            alert('Please add a user name')
            return 
        }
        addUser({username,email})
        
        
        }
    return (
        <Router>
<Route
 path='/Adduser' 
 exact 
 render = {(props)=> (
    <form onSubmit={onSubmit}>
    <text type='name' >User Name</text>
    <input type='text' placeholder='User Name' value={username} onChange={(e) => setUser(e.target.value)}></input>
    <text type='name'>Email</text>
    <input type='text' placeholder='Email-d' value={email} onChange={(e) => setEmail(e.target.value)}></input>
    <button type='submit'> Add</button>
</form>
)} />
    </Router>
    )}

export default withRouter(AddUser)
