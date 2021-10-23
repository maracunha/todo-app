import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import useApi from '../../services/api';
import useAppStore from '../../store';
import Button from '../Button';

function NewUser() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { createNewUser } = useApi();
  const { users, setUsers } = useAppStore();

  const onSubmit = (user) => {
    createNewUser(user).then((newUser) => {
      setUsers([...users, newUser.data.user]);
    });

    history.push('/users');
  };

  return (
    <div>
      <h1 className="title">Create a new User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('email')}
        />
        <Button type="submit" isOutlined>
          submit
        </Button>
      </form>
    </div>
  );
}

export default NewUser;
