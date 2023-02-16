import {test} from 'vitest'
import {render, screen} from '@testing-library/react'
import Login from './Login'

test('Login', () => {
  render(<Login/>)
  screen.getByRole('textbox', {name: /email/i});
  // noinspection JSCheckFunctionSignatures
  screen.getByLabelText(/password/i);
})
 