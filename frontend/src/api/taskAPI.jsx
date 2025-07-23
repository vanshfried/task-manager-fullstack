import axios from 'axios';

const API = 'http://localhost:3000/api/tasks';

export const fetchTasks = () => axios.get(API);
export const createTask = (data) => axios.post(API, data);
export const toggleTask = (id) => axios.patch(`${API}/${id}/toggle`);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
