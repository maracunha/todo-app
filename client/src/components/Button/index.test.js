import { render, waitFor, screen } from '@testing-library/react';
import Button from '.';

describe('Test Button', () => {
  it('button', async () => {
    render(
      <Button type="submit" isOutlined>
        submit
      </Button>,
    );

    await waitFor(() => screen.getAllByRole('button'));

    expect(screen.getAllByRole('button')[0]).toHaveClass('outlined');
  });
});
