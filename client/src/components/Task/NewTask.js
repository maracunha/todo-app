
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Button } from '../Button'

import './style.scss'

function NewTask() {
  const { register, handleSubmit } = useForm();
  const history = useHistory()

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:4000/api/v1/users').then(res =>
      res.json()
    )
  )
  
  const onSubmit = task => {
    console.log(task)

    fetch(`http://localhost:4000/api/v1/tasks/${task.user}/new`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(task)
      }).then(res =>
      res.json());

      history.push(`/tasks`)
  };


  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

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
            {data.map((todo) => (
              <option key={todo.id} {...register("user", {value: todo.id})}>{todo.name}</option>
            ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          {...register("title")} /
        >
        <textarea
          placeholder="Tell us your description"
          id="description"
          name="description"
          rows="5"
          cols="33"
          {...register("description", { type: 'text' })}
          >
        </textarea>
        <Button type="submit" isOutlined>
          submit
        </Button>
      </form>
    </div>
  );
}

export default NewTask;
