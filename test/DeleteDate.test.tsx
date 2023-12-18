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
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuHeaders = screen.getAllByTestId('delete-date__menu-item__header');
    const menuItems = screen.getAllByTestId('delete-date__menu-item');

    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toHaveTextContent('Shannon (Jan 5 1987');
    expect(menuItems[1]).toHaveTextContent('New Years (Jan 1');
    expect(menuItems[2]).toHaveTextContent('Random (Jan 1 0000');
    expect(menuHeaders).toHaveLength(3);
    expect(menuHeaders[0]).toHaveTextContent('Birthdays');
    expect(menuHeaders[1]).toHaveTextContent('Holidays');
    expect(menuHeaders[2]).toHaveTextContent('Other');
  });
  it('should call the parent component on item change', () => {
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuItems = screen.getAllByTestId('delete-date__menu-item');
    userEvent.click(menuItems[0]);
    // const input = screen.getByTestId('delete-date__textfield__input');
    // fireEvent.change(input, { target: { value: 'target-value' }});

    expect(onDeleteItemChangeMock).toHaveBeenCalledWith('target-value');
  });
});