import React, { useState, useEffect } from 'react';
import TaskService from './services/TaskService';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import './App.css'
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    TaskService.getAll().then(setTasks);
  }, []);

  const addTask = (task) => {
    TaskService.add(task).then((newTask) => {
      setTasks([...tasks, newTask]);
    });
  };

  const updateTask = (updatedTask) => {
    TaskService.update(updatedTask).then(() => {
      setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
      setCurrentTask(null);
    });
  };

  const deleteTask = (id) => {
    TaskService.delete(id).then(() => {
      setTasks(tasks.filter(t => t.id !== id));
    });
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {currentTask ? (
        <EditTaskForm currentTask={currentTask} onSubmit={updateTask} />
      ) : (
        <AddTaskForm onSubmit={addTask} />
      )}
      <TaskList tasks={tasks} onEdit={setCurrentTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
