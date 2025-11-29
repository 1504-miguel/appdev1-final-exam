import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// GET all todos
export const getTodosAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// ADD a new todo
export const addTodoAPI = async (todo) => {
  const response = await axios.post(BASE_URL, todo);
  return response.data;
};

// UPDATE a todo
export const updateTodoAPI = async (todo) => {
  const response = await axios.put(`${BASE_URL}/${todo.id}`, todo);
  return response.data;
};

// DELETE a todo
export const deleteTodoAPI = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id; // return deleted ID
};
