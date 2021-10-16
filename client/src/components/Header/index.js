import { Link } from 'react-router-dom'

import './style.css'

function Header() {
  return (
    <header className='wrapper'>
      <Link to="/">Home</Link>
      <div className='buttons'>
        <Link to="/users">users</Link>
        <Link to="/new/task">new task</Link>
      </div>
    </header>
  );
}

export default Header;