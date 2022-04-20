import { datesUrl } from "../../constants/Urls";

export const getAllDates = async () => {
  return fetch(datesUrl)
    .then(resp => resp.json())
    .then(jsonResp => jsonResp.body)
    .catch(err => console.error(err.message));
};

export const putNewDate = async (newDate) => {
  return fetch(datesUrl, { method: 'PUT', body: JSON.stringify(newDate)})
    .catch(err => console.error(err));
};

export const removeDate = async (dateToRemove) => {
  return fetch(datesUrl, { method: 'DELETE', body: JSON.stringify(dateToRemove)})
    .catch(err => console.error(err));
};
