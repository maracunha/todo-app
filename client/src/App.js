
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Tasks from './components/Task'
import NewTask from './components/Task/NewTask.js'
import Users from './components/Users'
import NewUser from './components/Users/NewUser.js'
import EditUser from './components/Users/EditUser'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/new/user" component={NewUser} />
          <Route path="/edit/user" component={EditUser} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/new/task" component={NewTask} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
