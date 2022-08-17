import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('input should 0', () => {
  render(<Counter number={4} />);
  const initialValue = Number(screen.getByTestId('counter').textContent);

  expect(initialValue).toBe(4);

  // const emaiElementInput = screen.getByRole('textbox');
});
test('increse 1', () => {
  render(<Counter number={6} />);
  const incremenetButton = screen.getByRole('button', {
    name: /increment/i,
  });
  userEvent.click(incremenetButton);

  const initialValue = Number(screen.getByTestId('counter').textContent);
  expect(initialValue).toBe(7);

  // const emaiElementInput = screen.getByRole('textbox');
});
test('decrese 1', () => {
  render(<Counter number={6} />);
  const decremenetButton = screen.getByRole('button', {
    name: /decrement/i,
  });
  userEvent.click(decremenetButton);

  const value = Number(screen.getByTestId('counter').textContent);
  expect(value).toBe(5);

  // const emaiElementInput = screen.getByRole('textbox');
});
