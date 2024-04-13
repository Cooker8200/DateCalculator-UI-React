import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import DateResult from "../src/scripts/DateResult";

describe('render', () => {
  describe('birthday', () => {
    describe('future birthday', () => {
      it('should render the text', () => {
        render(<DateResult
          selectedDate={{ date: 'Jan 1 2020', type: 'birthday', name: 'Mason'}}
          daysToSelectedDate={2}
        />)
        expect(screen.getByText('Mason has 2 days until their birthday on Jan 1!', { collapseWhitespace: true})).toBeInTheDocument();
      });
    });
    describe('bithday is today', () => {
      it('should render the text', () => {
        render(<DateResult
          selectedDate={{ date: 'Jan 1 2020', type: 'birthday', name: 'Mason'}}
          daysToSelectedDate={0}
        />)
        expect(screen.getByText('It is Mason\'s birthday. HAPPY BIRTHDAY!!', { collapseWhitespace: true})).toBeInTheDocument();
      });
    });
  });
  describe('non-birthday date', () => {
    describe('future date', () => {
      it('should render the text', () => {
        render(<DateResult
          selectedDate={{ date: 'Jan 1 2020', type: 'other', name: 'Vacation'}}
          daysToSelectedDate={9000}
        />)
        expect(screen.getByText('Vacation is 9000 days away on Jan 1 2020!', { collapseWhitespace: true})).toBeInTheDocument();
      });
    });
    describe('date is today', () => {
      it('should render the text', () => {
        render(<DateResult
          selectedDate={{ date: 'Jan 1 2020', type: 'other', name: 'Vacation'}}
          daysToSelectedDate={0}
        />)
        expect(screen.getByText('It is Vacation! Let\'s celebrate!!', { collapseWhitespace: true})).toBeInTheDocument();

      });
    });
  });
});
