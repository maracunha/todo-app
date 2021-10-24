import axios from 'axios';

const useApi = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const BASE_HEADERS = {
    Accept: 'application/json',
  };

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: BASE_HEADERS,
  });

  return {
    getUsers: () => axiosInstance.get('/users'),
    createNewUser: (body) => axiosInstance.post('/users/new', body),
    updateUser: (body, id) => axiosInstance.put(`/users/${id}`, body),
    deleteUser: (id) => axiosInstance.delete(`/users/${id}`),

    getTasks: (userId) => axiosInstance.get(`/tasks/${userId}`),
    todoDone: (body, userId, taskId) => axiosInstance.post(`/tasks/${userId}/${taskId}}`, body),
    createNewTask: (body, userId) => axiosInstance.post(`/tasks/${userId}/new`, body),
    updateTask: (body, id) => axiosInstance.put(`/tasks/${id}`, body),
  };
};

export default useApi;
