import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5148/api', 
});

export const getVehicles = () => api.get('/vehicles');
export const getVehicleById = (id) => api.get(`/vehicles/${id}`);
export const updateVehicle = (id, vehicle) => api.put(`/vehicles/${id}`, vehicle);
