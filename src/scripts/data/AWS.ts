import { datesUrl } from '../../constants/Urls';
import { IDate } from '../../interfaces/IDate';

export const getAllDates = async (): Promise<IDate[]> => {
  return fetch(datesUrl)
    .then(resp => resp.json())
    .then(jsonResp => JSON.parse(jsonResp.body))
    .catch(err => console.error(err.message));
};

export const putNewDate = async (newDate: any) => {
  return fetch(datesUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDate)
  })
  .catch(err => console.error(err));
};

export const removeDate = async (dateName: string) => {
  return fetch(datesUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: dateName })
  })
  .catch(err => console.error(err));
};
