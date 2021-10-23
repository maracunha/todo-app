import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

function User() {
  const envBaseUrl = process.env.REACT_APP_API_URL;

  const { isLoading, error, data } = useQuery('repoData', () => fetch(`${envBaseUrl}/api/v1/users`).then((res) => res.json()));

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  function handleDelete(id) {
    fetch(`${envBaseUrl}/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => console.log(res.json()));
  }

  return (
    <div className="contente">
      {data.map((todo) => (
        <div className="user" id={todo.id}>
          <Link
            className="edit"
            to={{
              pathname: '/edit/user',
              state: { todo },
            }}
          >
            ✍️
            <span className="tooltip">edit</span>
          </Link>
          <div>
            <Link to={{
              pathname: '/tasks',
              hash: `#${todo.id}`,
            }}
            >
              👀
              {' '}
              {todo.name}

            </Link>
            <p>
              ✉️
              {todo.email}
            </p>
          </div>
          <button type="button" onClick={() => handleDelete(todo.id)}>
            🧨
            <span className="tooltip">delete</span>
          </button>
        </div>
      ))}
      <Link className="add" to="/new/user">+</Link>
    </div>
  );
}

export default User;
