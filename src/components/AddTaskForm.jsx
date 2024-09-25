import React, { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    text: '',
    assignedTo: '',
    status: 'Pending',
    dueDate: '',
    priority: 'Low',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      text: '',
      assignedTo: '',
      status: 'Pending',
      dueDate: '',
      priority: 'Low',
      comments: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Task" value={task.text} onChange={handleInputChange} required />
      <input type="text" name="assignedTo" placeholder="Assigned To" value={task.assignedTo} onChange={handleInputChange} required />
      <select name="status" value={task.status} onChange={handleInputChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleInputChange} required />
      <select name="priority" value={task.priority} onChange={handleInputChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea name="comments" placeholder="Comments" value={task.comments} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
