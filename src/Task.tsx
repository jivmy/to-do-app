import { useState } from 'react';

const Task = () => {

    const [task, setTask] = useState<string>('Hello')
    const [tasks, setTasks] = useState<string[]>([])

    const handleDisplayTask = () => {
      if (task.trim() !== '') {
      setTasks([... tasks, task])
      setTask('')
    }
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

          <ul>{tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
          </ul>
        </div>
      );
}

export default Task;