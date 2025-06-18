import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5148/api', 
});

export const getEquipments = () => api.get('/equipment');

