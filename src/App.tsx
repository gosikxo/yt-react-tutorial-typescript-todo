import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces'

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)

  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text'
            name='task'
            placeholder='Task...'
            value={task}
            onChange={handleChange} />
          <input type='number'
            name='deadline'
            placeholder='Deadline (in days)..'
            value={deadline}
            onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task}/>
        })}
      </div>
    </div>
  );
}

export default App;
