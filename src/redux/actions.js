import { FETCH_FAMOUS_PEOPLE } from './actionsTypes';

export const fetchFamousPeople = data => ({
  type: FETCH_FAMOUS_PEOPLE,
  payload: {
    data,
  },
});
