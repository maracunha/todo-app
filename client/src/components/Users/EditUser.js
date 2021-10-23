import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import useApi from '../../services/api';

import Button from '../Button';

function EditUser() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();
  const { updateUser } = useApi();

  const {
    state: {
      todo: {
        id,
        name,
        email,
      },
    },
  } = location;

  const onSubmit = (user) => {
    updateUser(user, id);

    history.push('/users');
  };

  return (
    <div>
      <h1 className="title">Edit user</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { value: name })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('email', { value: email })}
        />
        <Button type="submit" isOutlined>
          submit
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
