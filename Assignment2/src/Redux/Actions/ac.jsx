export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";


export const addTodo = (title, status) => ({
  type: ADD_TODO,
  payload: { title, status, id: Date.now().toString() },
});

export const updateTodo = (id, status) => ({
  type: UPDATE_TODO,
  payload: { id, status },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});