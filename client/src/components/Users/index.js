import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../services/api';
import useAppStore from '../../store';

function User({ isLoading }) {
  const { deleteUser } = useApi();
  const { users } = useAppStore();
  const [usersStore, setUsersStore] = useState([]);

  function handleDelete(id) {
    deleteUser(id);
  }

  useEffect(() => {
    setUsersStore(users);
  }, [users]);

  if (isLoading) { return 'Loading...'; }

  return (
    <div className="contente">
      {usersStore && usersStore.map((user) => (
        <div className="user" id={user.id} key={user.id}>
          <Link
            className="edit"
            to={{
              pathname: '/edit/user',
              state: { user },
            }}
          >
            โ๏ธ
            <span className="tooltip">edit</span>
          </Link>
          <div>
            <Link to={{
              pathname: '/tasks',
              hash: `#${user.id}`,
            }}
            >
              ๐
              {' '}
              {user.name}

            </Link>
            <p>
              โ๏ธ
              {user.email}
            </p>
          </div>
          <button type="button" onClick={() => handleDelete(user.id)}>
            ๐งจ
            <span className="tooltip">delete</span>
          </button>
        </div>
      ))}
      <Link className="add" to="/new/user">+</Link>
    </div>
  );
}

export default User;
