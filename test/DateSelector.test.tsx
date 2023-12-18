import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import DateSelector from '../src/scripts/DateSelector';

const dates = [
  {
    date: 'Jan 1',
    name: 'New Years',
    type: 'holiday',
  },
  {
    date: 'Jan 5 1987',
    name: 'Shannon',
    type: 'birthday',
  },
  {
    date: 'Jan 1 0000',
    name: 'Random',
    type: 'other',
  },
];
const onDateSelectMock = jest.fn();

describe('render', () => {
  beforeEach(() => {
    render(<DateSelector dates={dates} onDateSelect={onDateSelectMock} />)
  });
  it('should render the textfield', () => {
    expect(screen.queryByTestId('date-selector__textfield')).toBeInTheDocument();
    expect(screen.queryByLabelText('Choose a Date')).toBeInTheDocument();

  });
  it('should render the menu items', () => {
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuHeaders = screen.getAllByTestId('date-selector__menu-item__header');
    const menuItems = screen.getAllByTestId('date-selector__menu-item');

    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toHaveTextContent('Shannon\'s Birthday');
    expect(menuItems[1]).toHaveTextContent('New Years');
    expect(menuItems[2]).toHaveTextContent('Random');
    expect(menuHeaders).toHaveLength(3);
    expect(menuHeaders[0]).toHaveTextContent('Birthdays');
    expect(menuHeaders[1]).toHaveTextContent('Holidays');
    expect(menuHeaders[2]).toHaveTextContent('Other');
  });
});
describe('actions', () => {
  beforeEach(() => {
    render(<DateSelector dates={dates} onDateSelect={onDateSelectMock} />)
  });
  it('should call the parent component on item change', () => {
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuItems = screen.getAllByTestId('date-selector__menu-item');
    fireEvent.click(menuItems[0]);

    expect(onDateSelectMock).toHaveBeenCalledWith({"date": "Jan 5 1987", "name": "Shannon", "type": "birthday"});
  });
});
