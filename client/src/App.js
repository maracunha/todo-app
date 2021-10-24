import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Tasks from './components/Task';
import NewTask from './components/Task/NewTask';
import Users from './components/Users';
import NewUser from './components/Users/NewUser';
import EditUser from './components/Users/EditUser';
import useAppStore from './store';
import { useUsers } from './services/queries';

function App() {
  const { setUsers } = useAppStore();
  const { isLoading, error, data } = useUsers();

  useEffect(() => {
    setUsers(data?.data);
  }, [data]);

  if (error) { return `An error has occurred: ${error.message}`; }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" render={() => (<Users isLoading={isLoading} />)} />
        <Route path="/new/user" component={NewUser} />
        <Route path="/edit/user" component={EditUser} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/new/task" component={NewTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
