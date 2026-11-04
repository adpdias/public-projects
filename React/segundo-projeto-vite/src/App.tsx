import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState<{label: string, done: boolean}[]>([])
  const [inputTask, setInputTask] = useState<string>('')

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, {label: inputTask, done: false}])
      setInputTask('')
    }
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const handleToggleTaskDone = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggleTaskDone(index)}
            />
            {task.label}<button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
