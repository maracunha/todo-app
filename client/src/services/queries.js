import { useQuery } from 'react-query';
import useApi from './api';

export const useUsers = () => {
  const { getUsers } = useApi();
  return useQuery('users', () => getUsers());
};

export const useTasks = (userId) => {
  const { getTasks } = useApi();
  return useQuery('tasks', () => getTasks(userId));
};
