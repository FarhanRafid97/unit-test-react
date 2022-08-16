import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
// const setup = () => render(<App />);
// beforeEach(() => {
//   render(<App />);
// });

const typeIntoFomr = ({ email, password, confirmPassowrd }) => {
  render(<App />);
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  const passwordInput = screen.getByLabelText('Password');
  const confirmPassworddElementInput =
    screen.getByLabelText('Confirm Password');
  if (email) {
    userEvent.type(emailInput, email);
  }
  if (password) {
    userEvent.type(passwordInput, password);
  }
  if (confirmPassowrd) {
    userEvent.type(confirmPassworddElementInput, confirmPassowrd);
  }
  return {
    emailInput,
    passwordInput,
    confirmPassworddElementInput,
  };
};

test('input should empty', () => {
  render(<App />);
  const emaiElementInput = screen.getByRole('textbox');
  const passwordElementInput = screen.getByLabelText('Password');

  const confirmPassworddElementInput =
    screen.getByLabelText('Confirm Password');
  expect(emaiElementInput.value).toBe('');
  expect(passwordElementInput.value).toBe('');
  expect(confirmPassworddElementInput.value).toBe('');
});

test('input email', () => {
  render(<App />);
  const { emailInput } = typeIntoFomr({ email: 'aku' });
  expect(emailInput.value).toBe('aku');
});
test('input password', () => {
  const { passwordInput } = typeIntoFomr({ password: '123' });

  expect(passwordInput.value).toBe('123');
});

test('error email', () => {
  render(<App />);

  const emailErrorInput = screen.queryByText(/invalid email/i);

  const buttonSubmit = screen.getByRole('button', { name: /submit/i });
  expect(emailErrorInput).not.toBeInTheDocument();
  typeIntoFomr({ email: 'gege.com' });

  userEvent.click(buttonSubmit);
  const emailErrorInputse = screen.queryByText(/invalid email/i);
  expect(emailErrorInputse).toBeInTheDocument();
});

test('error password', () => {
  render(<App />);
  const errorMessage = screen.queryByText(/invalid password/i);
  const buttonSubmit = screen.getByRole('button', { name: /submit/i });
  typeIntoFomr({ email: 'gege@.com' });
  expect(errorMessage).not.toBeInTheDocument();

  typeIntoFomr({ password: '1' });
  userEvent.click(buttonSubmit);
  const errorMessageAgaing = screen.queryByText(/invalid password/i);

  expect(errorMessageAgaing).toBeInTheDocument();
});

test('error confirm password', () => {
  render(<App />);
  const errorMessage = screen.queryByText(/confirm password invalid/i);
  const buttonSubmit = screen.getByRole('button', { name: /submit/i });

  typeIntoFomr({ email: 'gege@.com', password: '123' });
  expect(errorMessage).not.toBeInTheDocument();

  typeIntoFomr({ confirmPassowrd: '1' });
  userEvent.click(buttonSubmit);
  const errorMessageAgaing = screen.queryByText(/confirm password invalid/i);

  expect(errorMessageAgaing).toBeInTheDocument();
});

test('no error', () => {
  render(<App />);
  const errorMessage = screen.queryByText(/invalid email/i);
  const buttonSubmit = screen.getByRole('button', { name: /submit/i });
  expect(errorMessage).not.toBeInTheDocument();

  typeIntoFomr({ email: 'gagaga' });
  userEvent.click(buttonSubmit);
  const errorMessageEmail = screen.queryByText(/invalid email/i);

  expect(errorMessageEmail).toBeInTheDocument();

  typeIntoFomr({
    email: 'gagaga@gmail.com',
    confirmPassowrd: '123',
    password: '123',
  });

  userEvent.click(buttonSubmit);
  expect(errorMessage).not.toBeInTheDocument();
});
