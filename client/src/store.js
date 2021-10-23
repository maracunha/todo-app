import create from 'zustand';

const store = (set) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
});

const useAppStore = create(store);

export default useAppStore;
