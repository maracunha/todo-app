import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '.';

describe('Test Header', () => {
  it('header go to users', async () => {
    render(
      <BrowserRouter>
        <Header type="submit" isOutlined>
          submit
        </Header>
      </BrowserRouter>,
    );

    expect(screen.getByText(/users/)).toBeInTheDocument();
  });
});
