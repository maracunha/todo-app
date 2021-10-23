import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

function NewUser() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const envBaseUrl = process.env.REACT_APP_API_URL;

  const onSubmit = (user) => {
    fetch(`${envBaseUrl}/api/v1/users/new`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());

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
