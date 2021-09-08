import React, {useState} from 'react'
import CardStatus from './Components/CardStatus';
import ActionBar from './Components/ActionBar';

export function ChallengeComponent() {
  const [taskList, setTasks] = useState({
      todo:[] as any,  
      inProgress:[] as any,
      done:[] as any
    });

  const handleOnAddTask = ( newTask:any) =>{
    taskList.todo.push(newTask);
    setTasks({...taskList, ...{todo:taskList.todo }});
  };

  const handleOnTodo = (movement) =>{
    taskList.todo.splice(movement.idx, 1);
    taskList.inProgress.push(movement.title);
    setTasks({...taskList, ...{todo:taskList.todo, inProgress: taskList.inProgress }});
  };

  const handleOnInProgress = (movement) =>{

    taskList.inProgress.splice(movement.idx, 1);
   if(movement.move === "right"){
    taskList.done.push(movement.title);
    setTasks({...taskList, ...{inProgress:taskList.inProgress, done: taskList.done }});
   }else{
    taskList.todo.push(movement.title);
    setTasks({...taskList, ...{todo:taskList.todo, inProgress: taskList.inProgress }});
   }
  };
  const handleOnDone = (movement) =>{
    taskList.done.splice(movement.idx, 1);
    taskList.inProgress.push(movement.title);
    setTasks({...taskList, ...{inProgress:taskList.inProgress, done: taskList.done }});
  };
  

  return (
    <>
      <div className="cardWrapper">
        <CardStatus 
          title="TODO" 
          tasks={taskList.todo} 
          endLeft
          onMove={handleOnTodo}
        />
        <CardStatus 
          title="In Progress" 
          tasks={taskList.inProgress}
          onMove={handleOnInProgress}
        />
        <CardStatus 
          title="Done"  
          tasks={taskList.done} 
          endRight
          onMove={handleOnDone}
        />
      </div>
      <ActionBar onAddTask={handleOnAddTask}/>
    </>
  )
}
