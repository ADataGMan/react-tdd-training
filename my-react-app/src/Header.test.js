import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/welcome to react/i);
  expect(linkElement).toBeInTheDocument();
});