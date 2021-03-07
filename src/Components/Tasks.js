import React from 'react'
import Task from './Task'

    

const Tasks = (props) => {
    return (
        <>
{props.tasks.map((task)=>
(<Task task ={task.text}/>)
)
}

        </>
    )
}
export default Tasks