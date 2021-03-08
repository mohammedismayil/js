import React from "react";
import {useState} from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks"
// function App() {
//   return (
//     <div className="App">
//      <Header/>
//     </div>
//   );
// }
const App = () => {

  const [tasks,setTasks] = useState([
  
        
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },{
      "id": 3,
      "text": "Games at School",
      "day": "Feb 8th at 1:30pm",
      "reminder": true
    }
 
])
 function deleteTask(id) {
   console.log("delete this task of id",id)

   setTasks(tasks.filter((task) =>task.id !== id ))
 }
return (
  <div>
    <Header />
    { tasks.length > 0 ? 
      < Tasks  tasks = {tasks} onDelete = {deleteTask}/> : 'No tasks to show'}
  </div>

)

    
     
    
}

export default App;
