import { getAllDatesUrl } from "../../constants/Urls";

export const getAllDates = async () => {
  return fetch(getAllDatesUrl)
    .then(resp => resp.json())
    .then(jsonResp => jsonResp.body)
    .catch(err => console.error(err.message));
};
