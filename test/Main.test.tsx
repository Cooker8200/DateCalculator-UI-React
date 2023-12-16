import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Main from '../src/scripts/Main';

test('it should render the page title', () => {
  render(<Main />);

  expect(screen.getByTestId('main__title')).toHaveTextContent('Date Calculator');
});