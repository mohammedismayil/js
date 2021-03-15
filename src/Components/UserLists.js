import React from 'react'
import {useState,useEffect} from 'react'
import Userlist from "./Userlist"
const UserLists = () => {

    const [users,setUsers] = useState([])
useEffect(() => {
    const getUsers = async ()  => {
    const usersFromServer = await fetchUsers()
    setUsers(usersFromServer)
    }
    getUsers()
   }, [])
   // Fetch tasks from server 
 const fetchUsers = async ()  => {
    const response = await fetch('http://localhost:5000/user_list')
    const data = await response.json()
    return data
    }
    return (
        <>
       
            {users.map((user)=>
( <Userlist user={user} />)

)
}
</>
    )
}

export default UserLists
