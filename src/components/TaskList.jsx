import React, { useState } from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Checkbox</th>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td><input type="checkbox" checked={task.status === 'Completed'} readOnly /></td>
              <td>{task.text}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td><button onClick={() => onEdit(task)}>Edit</button></td>
              <td><button onClick={() => onDelete(task.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
