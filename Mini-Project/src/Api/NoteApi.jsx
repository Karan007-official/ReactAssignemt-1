import axios from "axios";

const API = "http://localhost:3000/notes";

export const getNotes = () => axios.get(API);
export const addNote = (data) => axios.post(API, data);
export const deleteNote = (id) => axios.delete(`${API}/${id}`);
export const updateNote = (id, data) =>
  axios.put(`${API}/${id}`, data);