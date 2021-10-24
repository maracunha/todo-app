import './style.scss';
import checkImg from '../../assets/check.svg';
import deleteImg from '../../assets/delete.svg';
import { useTasks } from '../../services/queries';
import useApi from '../../services/api';

function getUserId() {
  const hash = /\d+$/.exec(window.location.href);
  const userId = hash && hash[0];
  return userId || 'new';
}

function Task() {
  const userId = getUserId();
  const { todoDone } = useApi();

  const { isLoading, error, data } = useTasks(userId);

  const handleDone = (task) => {
    if (window.confirm(`Are you sure to change from ${task.state} ?`)) {
      todoDone(task, userId, task.id);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete ?')) {
      console.log(id);
    }
  };

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <>
      {userId && (
      <h1 className="title">
        User
        {' '}
        {userId}
      </h1>
      )}
      <div className="tasks">
        {data.data?.map((task) => (
          <div id={task.id}>
            <header>
              <span>
                Title:
                {' '}
                {task.title}
              </span>
              <span className={task.state === 'done' ? 'status done' : 'status todo'}>{task.state}</span>
            </header>
            <section>
              <h4>Description</h4>
              <span>{task.description}</span>
            </section>
            <footer>
              <button
                type="button"
                className={task.state === 'done' ? 'done' : ''}
                onClick={() => handleDone(task)}
              >
                <img src={checkImg} alt="Done todo" />
              </button>
              <button
                type="button"
                className="trash"
                onClick={() => handleDelete(task.id)}
              >
                <img src={deleteImg} alt="Delete todo" />
              </button>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
}

export default Task;
