import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders todos', () => {
  const { getByText } = render(<Todos />);
  const linkElement = getByText(/Todos/i);
  expect(linkElement).toBeInTheDocument();
});
