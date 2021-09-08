import React, {useState} from 'react'

const ActionBar = ({onAddTask}) => {
    const [task, setTask]=useState("");

    const handleOnClick = ()=>{
        if(!!task){
            onAddTask(task);
        }
    }
    return (
        <>
          <input type="text" placeholder="Add a task" onChange={(event)=> { setTask(event.target.value);}}/>
          <button onClick={handleOnClick}>+</button>
        </>
    )
};

export default ActionBar;