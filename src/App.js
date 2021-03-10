import React from "react";
import {useState,useEffect} from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"
// function App() {
//   return (
//     <div className="App">
//      <Header/>
//     </div>
//   );
// }
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
  
  // showAdd = !showAdd
  setAdd(!showAdd)
  console.log(!showAdd ? "show the add view" : "hide the view")
}
//For deleting the task
 const deleteTask = async (id) => {
   console.log("delete this task of id",id)
 const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  method: 'DELETE'
})
  //  const data = await res.json 
  //  setTasks([data])
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
 }
const addTask =  async (task) => {
  console.log(task)

  const res  = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body:JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])
// const id = Math.floor(Math.random()*10000) + 1
// const newTask = {id , ...task}
// setTasks([...tasks, newTask])
}
 function onToggleReminder(id) {
  console.log("toggle this task of id",id)

  setTasks(tasks.map((task) =>  
  task.id === id ? {...task,reminder:!task.reminder}: task
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
  console.log(data)
  return data
  }

return (
  <div>
  
    <Header title = "Add" onShowAdd = {onShowAdd} showAdd = {showAdd}/>
    { showAdd &&  <AddTask onAdd = {addTask}/> }
   
    { tasks.length > 0 ? 
      < Tasks  tasks = {tasks} onDelete = {deleteTask} onToggle = {onToggleReminder}/> : 'No tasks to show'}
      <button onClick = {addCount}> Counter {count}</button>
  </div>

)
//
    
     
    
}

export default App;
