import './Todo.css'
import {useState} from 'react';


const Todo = () =>{
    const [tasks, setTasks] = useState([
        {id: 1, task: 'Finish te exercises'},
        {id: 2, task: 'Feed the kids'}
    ])

    //removes from the list the object that has the same ID as the one that is clicked on
    const handleTaskClick = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      };

    const handleInput = (e) =>{
        //generates a new decimal ID making sure it doesn't already exists
        let newId;
        do {
          newId =  Math.floor(Math.random()*(100-1)+1);
        } while (tasks.find(item => item.id === newId));

        const value = e.target.value
        //add the input to the task list and clear the input
        if (e.keyCode === 13){
            setTasks( [
                ...tasks,
                { id: newId, task: value } 
              ]);
            e.target.value = '';
            console.log(tasks)
        }
        
    }

    return(
        <div className = 'todocontainer'>
            <h1 id = 'title'>Todo's</h1>
            {tasks.length>0 ? tasks.map(todo=>{
                return(
                    <div class='todo' key={todo.id} onClick={() => handleTaskClick(todo.id)}> {todo.task} </div>
                )
            
            }): <p id='nothing'>Nothing left to do! Yay!</p>}
            <p id='addtask'>Add a new todo:</p>
            <input id='taskinput' onKeyDown = {(e)=>handleInput(e)}/>
        </div>
    )
}

export default Todo

