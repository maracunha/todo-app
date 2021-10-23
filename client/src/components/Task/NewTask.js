import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import './style.scss';
import useAppStore from '../../store';
import useApi from '../../services/api';

function NewTask() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const { users } = useAppStore();
  const { createNewTask } = useApi();

  const onSubmit = (task) => {
    createNewTask(task, task.user);
    history.push('/tasks');
  };

  return (
    <div>
      <h1 className="title">New task</h1>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <select
          name="1A"
          id="select"
          autoComplete="off"
          required
        >
          {users && users.map((todo) => (
            <option key={todo.id} {...register('user', { value: todo.id })}>{todo.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          {...register('title')}
        />
        <textarea
          placeholder="Tell us your description"
          id="description"
          name="description"
          rows="5"
          cols="33"
          {...register('description', { type: 'text' })}
        />
        <Button type="submit" isOutlined>
          submit
        </Button>
      </form>
    </div>
  );
}

export default NewTask;
