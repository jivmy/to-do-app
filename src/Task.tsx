import { useState } from 'react';

const Task = () => {

    const [task, setTask] = useState<string>('Hello')
    const [displayTask, setDisplayTask] = useState<string>('')

    const handleDisplayTask = () => {
      setDisplayTask(task)
      setTask('')
    }
    
    return  (
        <div>
          <input
            type = "text" 
            value = {task}
            onChange={(e) => setTask(e.target.value)}
            placeholder = "Enter a task"
          />
          <button onClick={handleDisplayTask}>Add</button>

          <h1>{displayTask}</h1>
        </div>
      );
}

export default Task;