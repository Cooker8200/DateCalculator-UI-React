import { IDate } from '../../interfaces/IDate';

export const getAllDates = async (): Promise<IDate[]> => {
  return fetch(`${process.env.REACT_APP_DATES_URL}`, {
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(jsonResp => JSON.parse(jsonResp.body))
    .catch(err => console.error(err.message));
};

export const putNewDate = async (newDate: any) => {
  return fetch(`${process.env.REACT_APP_DATES_URL}`, {
    method: 'PUT',
    headers: {
      'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDate)
  })
  .catch(err => console.error(err));
};

export const removeDate = async (dateName: string) => {
  return fetch(`${process.env.REACT_APP_DATES_URL}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: dateName })
  })
  .catch(err => console.error(err));
};
