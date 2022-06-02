/* eslint-disable react/prop-types */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

test('calls onClick prop when clicked', () => {
  const handleOperator = jest.fn();
  render(<Button onClick={handleOperator}>+</Button>);
  fireEvent.click(screen.getByText('+'));
  expect(handleOperator).toHaveBeenCalledTimes(1);
});
