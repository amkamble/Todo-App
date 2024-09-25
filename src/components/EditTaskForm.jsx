import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ currentTask, onSubmit }) => {
  const [task, setTask] = useState(currentTask);

  useEffect(() => {
    setTask(currentTask);
  }, [currentTask]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={task.text} onChange={handleInputChange} required />
      <input type="text" name="assignedTo" value={task.assignedTo} onChange={handleInputChange} required />
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
      <textarea name="comments" value={task.comments} onChange={handleInputChange} />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;
