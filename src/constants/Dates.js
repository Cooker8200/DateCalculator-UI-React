import { dateType } from "./DateType";

export const birthdays = [
  {
    type: dateType.birthday,
    name: 'Matt',
    birthday: new Date('June 18 1982'),
  },
  {
    type: dateType.birthday,
    name: 'Shannon',
    birthday: new Date('Jan 5 1987'),
  },
  {
    type: dateType.birthday,
    name: 'Mason',
    birthday: new Date('Aug 16 2011'),
  },
  {
    type: dateType.birthday,
    name: 'Kenzie',
    birthday: new Date('Aug 31 2008'),
  },
  {
    type: dateType.birthday,
    name: 'Grandma',
    birthday: new Date('Oct 18 1955'),
  },
  {
    type: dateType.birthday,
    name: 'Grandpa',
    birthday: new Date('May 5 1954'),
  },
  {
    type: dateType.birthday,
    name: 'Jennifer',
    birthday: new Date('Apr 6 1985'),
  },
  {
    type: dateType.birthday,
    name: 'Caleb',
    birthday: new Date('June 28 1981'),
  },
];

export const holidays = [
  {
    type: dateType.holiday,
    name: 'Christmas',
    date: new Date('Dec 25'),
  },
  {
    type: dateType.holiday,
    name: 'New Years',
    date: new Date('Jan 1'),
  },
  {
    type: dateType.holiday,
    name: '4th of July',
    date: new Date('July 4'),
  },
]
