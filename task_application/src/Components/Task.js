import React from "react";
import { useState } from "react";

const Tasks = () => {
    const [tasks , setTasks] = useState([
            {
                id: 1,
                text: "Task 1",
                day: "Monday",
                remainder: true,
            },
            {
                id: 2,
                text: "Task 2",
                day: "Tuesday",
                remainder: true,
            },
            {
                id: 3,
                text: "Task 3",
                day: "Wednesday",
                remainder: true,
            },
            {
                id: 4,
                text: "Task 4",
                day: "Thursday",
                remainder: true,
            },
            {
                id: 5,
                text: "Task 5",
                day: "Friday",
                remainder: true,
            },
        ]);
    
	return( <>
    {tasks.map((task)=>(
        <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
    )
};

export default Tasks;
