let tasks = [];

const TaskService = {
  getAll: () => Promise.resolve([...tasks]),

  add: (task) => {
    task.id = tasks.length + 1;
    tasks.push(task);
    return Promise.resolve(task);
  },

  update: (updatedTask) => {
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    tasks[index] = updatedTask;
    return Promise.resolve(updatedTask);
  },

  delete: (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return Promise.resolve();
  }
};

export default TaskService;
