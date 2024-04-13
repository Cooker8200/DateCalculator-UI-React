import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import AdminDialog from '../src/scripts/AdminDialog';

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
const onDialogCloseMock = jest.fn();
const onSaveMock = jest.fn();

describe('render', () => {
  beforeEach(() => {
    render(<AdminDialog
      showDialog={true}
      dates={dates}
      onDialogClose={onDialogCloseMock}
      onSave={onSaveMock}
    />)
  });
  it('should render the common components', () => {
    expect(screen.getByTestId('admin-dialog__dialog')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__button__close')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__dialog__title')).toHaveTextContent('Manage Dates');
    expect(screen.getByTestId('admin-dialog__radio__add-date')).toBeInTheDocument();
    expect(screen.getByLabelText('Add Date')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__radio__remove-date')).toBeInTheDocument();
    expect(screen.getByLabelText('Remove Date')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__dialog')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__button__cancel')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__button__save')).toBeInTheDocument();
  });
  it('should render add date', () => {
    expect(screen.getByTestId('add-date')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__button__save')).toHaveTextContent('Add Date');
  });
  it('should render remove date', () => {
    const removeDateRadio = screen.getByLabelText('Remove Date');
    fireEvent.click(removeDateRadio);

    expect(screen.getByTestId('delete-date')).toBeInTheDocument();
    expect(screen.getByTestId('admin-dialog__button__save')).toHaveTextContent('Remove Date');
  });
});
describe('actions', () => {
  beforeEach(() => {
    render(<AdminDialog
      showDialog={true}
      dates={dates}
      onDialogClose={onDialogCloseMock}
      onSave={onSaveMock}
    />)
  });
  it('should call the parent component on close from title click', () => {
    const closeButton = screen.getByTestId('admin-dialog__button__close');
    fireEvent.click(closeButton);

    expect(onDialogCloseMock).toHaveBeenCalled();
  });
  it('should call the parent component on close from cancel click', () => {
    const cancelButton = screen.getByTestId('admin-dialog__button__cancel');
    fireEvent.click(cancelButton);

    expect(onDialogCloseMock).toHaveBeenCalled();
  });
  it('should call the parent component on save click', () => {
    const removeDateRadio = screen.getByLabelText('Remove Date');
    fireEvent.click(removeDateRadio);
    const combobox = screen.getByRole('combobox');
    fireEvent.mouseDown(combobox);
    const menuItems = screen.getAllByTestId('delete-date__menu-item');
    fireEvent.click(menuItems[0]);
    const saveButton = screen.getByTestId('admin-dialog__button__save');
    fireEvent.click(saveButton);

    expect(onSaveMock).toHaveBeenCalled();
  });
});
