import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Main from '../src/scripts/Main';
import * as AwsClient from '../src/scripts/data/AwsClient';

const getAllDatesMock = jest.spyOn(AwsClient, 'getAllDates');
const getAllDatesResponse = [
  {
    date: 'June 18 1982',
    name: 'Matt',
    type: 'birthday'
  }
];

describe('render', () => {
  beforeEach(() => {
    getAllDatesMock.mockResolvedValueOnce(getAllDatesResponse);
    render(<Main />);
  });
  describe('when no results exist', () => {
    it('it should render the page title', () => {
      expect(screen.queryByTestId('main__title')).toHaveTextContent('Date Calculator');
    });
    it('it should render the date selector text', () => {
      expect(screen.queryByTestId('main__text__date-selector')).toHaveTextContent('How many days until...');
    });
    it('it should render the date selector', () => {
      expect(screen.queryByTestId('main__date-selector')).toBeInTheDocument();
    });
    it('it should render the admin button', () => {
      expect(screen.queryByTestId('main__dates-admin')).toBeInTheDocument();
    });
    it('it should not render the dates results', () => {
      expect(screen.queryByTestId('main__dates-results')).toBeNull();
    });
  });
  xdescribe('when results exist', () => {
  
  });
});