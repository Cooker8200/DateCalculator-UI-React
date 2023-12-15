import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from '../src/scripts/Main';

test('test', () => {
  expect(1 + 2).toEqual(3);
});

test('it should render the page title', () => {
  // render(<Main />);
  render(<div data-tesid='main_title'>Date Calculator</div>)
  const title = screen.getByTestId('main__title');
  console.log(title);

  expect(screen.getByTestId('main__title')).toEqual('Date Calculator');
});