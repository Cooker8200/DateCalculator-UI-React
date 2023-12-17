import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import DeleteDate from "../src/scripts/DeleteDate";
import userEvent from "@testing-library/user-event";

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
const onDeleteItemChangeMock = jest.fn();

describe('render', () => {
  beforeEach(() => {
    render(<DeleteDate dates={dates} onDeleteItemChange={onDeleteItemChangeMock}/>)
  });
  it('should render the textfield', () => {
    expect(screen.queryByTestId('delete-date__textfield')).toBeInTheDocument();
    expect(screen.queryByLabelText('Select a Date')).toBeInTheDocument();
  });
  it('should render the menu items', () => {
    const input = screen.getByTestId('delete-date__textfield__input');
    userEvent.click(input);
    const menuItems = screen.getAllByTestId('delete-date__menu-item');
    expect(menuItems).toHaveLength(3);
  });
  it('should call the parent component on item change', () => {
    const input = screen.getByTestId('delete-date__textfield__input');
    fireEvent.change(input, { target: { value: 'target-value' }});
    screen.debug();
    debugger;
    expect(onDeleteItemChangeMock).toHaveBeenCalledWith('target-value');
  });
});