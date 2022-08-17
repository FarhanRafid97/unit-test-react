import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Fetch from './fetch';

test('loads and displays greeting', async () => {
  render(<Fetch url="https://jsonplaceholder.typicode.com/todos/1" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await waitFor(() => screen.findByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('delectus aut autem');
  expect(screen.getByRole('button')).toBeDisabled();
});

test('handles server error', async () => {
  render(<Fetch url="https://jsonplaceholder.typicode.com/todos/33331" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await waitFor(() => screen.findByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled();
});
