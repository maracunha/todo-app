import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewUser from './NewUser';

describe('Test New User', () => {
  it('should render new users', async () => {
    render(
      <BrowserRouter>
        <NewUser />
      </BrowserRouter>,
    );
    expect(screen.getByText(/create a new user/i)).toBeInTheDocument();
  });

  it('should create a new user', async () => {
    render(
      <BrowserRouter>
        <NewUser />
      </BrowserRouter>,
    )
    // fireEvent.change(screen.findByLabelText(/name/i), { target: { value: 'coisa' }})
    // const email = screen.findByPlaceholderText(/Email/i);
    // const submit = screen.findByLabelText(/submit/i);

    // expect(screen.getAllByRole('button')[0]).toHaveClass('outlined');
  });

});

