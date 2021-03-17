import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {useState,useEffect} from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"
import Footer from "./Components/Footer"
import About from "./Components/About"
import AddUser from "./Components/AddUser"
import UserLists from "./Components/UserLists"
import UserCards from "./Components/Cards"
import ReactDOM from 'react-dom';
import './index.css'
  ReactDOM.render(
    // <React.StrictMode>
      // <App />
      // console.log('during rendering'),
      // <UserCards />
    // </React.StrictMode>,
    // ,
    <div> hello i am from another js file </div>,
    // document.getElementById('root'),
    document.getElementById('mySecondApp')
  );
const App = () => {

const [count,setCount] = useState(0)
const [showAdd,setAdd] = useState(false)
  const [tasks,setTasks] = useState([])
const addCount = () => {
setCount(count+1)
console.log('value of count'+count)

}

// For show / hide add button
const onShowAdd = () => {
  setAdd(!showAdd)
}
//For deleting the task
 const deleteTask = async (id) => {
 await fetch(`http://localhost:5000/tasks/${id}`,{
  method: 'DELETE'
})
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
 }
const addTask =  async (task) => {
  const res  = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body:JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
}
 const onToggleReminder = async (id) => {
const taskToggle = await fetchTask(id)
const updTask = {...taskToggle,reminder: !taskToggle.reminder}
const res = await fetch(`http://localhost:5000/tasks/${id}`,
{
  headers:{
    'Content-type': 'application/json'
  },method:'PUT',
  body: JSON.stringify(updTask)
})
const data = await res.json()
  setTasks(tasks.map((task) =>  
  task.id === id ? {...task,reminder:data.reminder}: task
  ))
 }
 useEffect(() => {
  const getTasks = async ()  => {
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
  }
  getTasks()
 }, [])

 // Fetch tasks from server 
 const fetchTasks = async ()  => {
  const response = await fetch('http://localhost:5000/tasks')
  const data = await response.json()
  return data
  }
 // Fetch particular task from server 
 const fetchTask = async (id)  => {
  const response = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await response.json()
  return data
  }
 
return (
  <Router>
 <div>
  {/* <ButtonAppBar /> */}
  <Header title = "Add" onShowAdd = {onShowAdd} showAdd = {showAdd}/>
  <switch>
  <Route
 path='/' 
 exact 
 render = {(props)=> (
<>
{ showAdd &&  <AddTask onAdd = {addTask}/> }
 
  { tasks.length > 0 ? 
    < Tasks  tasks = {tasks} onDelete = {deleteTask} onToggle = {onToggleReminder}/> : 'No tasks to show'}
    <button onClick = {addCount}> Counter {count}</button>
    <Link to='/AddUser'>Adduser</Link>
    <Link to='/Userlist'>ViewUsers</Link>
</>
)} />
    <Route path='/about' component={About}/>
    <Route path='/Adduser' component={AddUser}/>
    <Route path='/Userlist' component={UserLists} />
  </switch>
<UserCards />
    < Footer />
</div>
  </Router>
 

)
//
    
     
    
}

export default App;
