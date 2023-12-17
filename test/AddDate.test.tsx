import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import AddDate from "../src/scripts/AddDate";
import AdminDialog from "../src/scripts/AdminDialog";

const onDateChangeMock = jest.fn();
const onTypeChangeMock = jest.fn();
const onNameChangeMock = jest.fn();

describe('actions', () => {
  beforeEach(() => {
    render(<AddDate
      onDateChange={onDateChangeMock}
      onTypeChange={onTypeChangeMock}
      onNameChange={onNameChangeMock}
    />)
  });
  xit('should call the parent on date change', () => {
    const datePicker = screen.getByTestId('add-date__date-picker');
    fireEvent.change(datePicker);

    expect(onDateChangeMock).toHaveBeenCalled();
  });
  it('should call the parent on type change', () => {
    const textfield = screen.getByLabelText('Choose Type');
    fireEvent.change(textfield);

    expect(onTypeChangeMock).toHaveBeenCalled();
  });
  it('should call the parent on name change', () => {
    const textfield = screen.getByLabelText('Choose Name');
    const textfield = screen.getByTestId('testy');
    fireEvent.change(textfield);

    expect(onNameChangeMock).toHaveBeenCalled();
  });
});