import { datesUrl, gamesUrl } from '../../constants/Urls';
import { IDate } from '../../interfaces/IDate';
import IGame from '../../interfaces/IGame';

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

export const getAllGames = async (): Promise<IGame[]> => {
  return [
    {
      name: 'World of Warcraft',
      data: 'game1Data'
    },
    {
      name: 'Gran Turismo 7',
      data: 'gameData2'
    }
  ]
  // return fetch(gamesUrl)
  //   .then(resp => resp.json())
  //   .then(jsonResp => JSON.parse(jsonResp.body))
  //   .catch(err => console.error(err.message));
};

export const putNewGame = async (gameName: any) => {
  return fetch(gamesUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameName)
  })
  .catch(err => console.error(err));
};

export const removeGame = async (gameName: string) => {
  return fetch(gamesUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: gameName })
  })
  .catch(err => console.error(err));
};