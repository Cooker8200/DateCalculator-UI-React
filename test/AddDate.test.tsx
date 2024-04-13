import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import AddDate from "../src/scripts/AddDate";

const onDateChangeMock = jest.fn();
const onTypeChangeMock = jest.fn();
const onNameChangeMock = jest.fn();

describe('render', () => {
  beforeEach(() => {
    render(<AddDate
      onDateChange={onDateChangeMock}
      onTypeChange={onTypeChangeMock}
      onNameChange={onNameChangeMock}
    />)
  });
  it('should render the components', () => {
    // expect(screen.getByTestId('add-date__date-picker')).toBeInTheDocument();
    expect(screen.getByTestId('add-date__textfield__type')).toBeInTheDocument();
    expect(screen.getByTestId('add-date__textfield__name')).toBeInTheDocument();
  });
  it('should render the date type menu items', () => {
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuItems = screen.getAllByTestId('add-date__menu-item');

    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toHaveTextContent('Birthday');
    expect(menuItems[1]).toHaveTextContent('Holiday');
    expect(menuItems[2]).toHaveTextContent('Other');
  });
});
describe('actions', () => {
  beforeEach(() => {
    render(<AddDate
      onDateChange={onDateChangeMock}
      onTypeChange={onTypeChangeMock}
      onNameChange={onNameChangeMock}
    />)
  });
  xit('should call the parent on date change', () => {
    // TODO: can this be tested.  it is an external library
    const datePicker = screen.getByTestId('add-date__date-picker');
    fireEvent.change(datePicker);

    expect(onDateChangeMock).toHaveBeenCalled();
  });
  it('should call the parent on type change', () => {
    const textfield = screen.getByLabelText('Choose Type');
    fireEvent.mouseDown(textfield);
    const menuItems = screen.getAllByTestId('add-date__menu-item');
    fireEvent.click(menuItems[0]);

    expect(onTypeChangeMock).toHaveBeenCalled();
  });
  it('should call the parent on name change', () => {
    const textfield = screen.getByLabelText('Date Name');
    fireEvent.change(textfield, { target: { value: 'Vacation' }});

    expect(onNameChangeMock).toHaveBeenCalled();
  });
});