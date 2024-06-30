import axios from "axios";

const API_URL = "http://localhost:5005/todos";

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos", error);
    throw error;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${API_URL}/create`, todo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo", error);
    throw error;
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error("Error updating todo", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/remove/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo", error);
    throw error;
  }
};

export const getTodo = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/_one/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo", error);
    throw error;
  }
};
