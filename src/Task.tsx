import React, { useState } from 'react'; 

const Tasks: React.FC = () => {

    interface Task {
        name: string;
        cross: boolean;
    }

    const [task, setTask] = useState<Task>({name: '', cross: false});
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = () => {
        if (task.name.trim() !== '') {
            setTasks([...tasks, task]);
            setTask({...task, name: ''});
        }
    }

    const deleteTask = (i: number) => {
        setTasks(tasks.filter((_, index) => index !== i));
    }

    const clearTask = () => {
        setTasks([]);
    }

    const crossText = (index: number) => {
        setTasks(tasks.map((t, i) => {
            if (i === index) {
                return {
                    ...t,
                    cross: !t.cross
                }
            }
            return t;
        }
        ))
    } 

    return (
        <div>
            <input
                type="text"
                value={task.name}
                onChange={(e) => setTask({...task, name: e.target.value})}
                placeholder="Enter a task" 
            />
            <button onClick={handleAddTask}>Add task</button>
            <button onClick={clearTask}>Clear task</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        <input type="checkbox" onChange={() => crossText(index)}/>
                        <span style={{textDecoration: t.cross ? 'line-through' : 'none'}}>
                        {t.name}
                        </span>
                        <button onClick={() => deleteTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
