let todoId = 0;

export const addTask = text => ({
  type: 'ADD_TASK',
  id: todoId++,
  text
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id
});
