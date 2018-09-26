import {FETCH_FAMOUS_PEOPLE, FETCH_FAMOUS_PEOPLE_SUCCESS} from './actionsTypes';

export const fetchFamousPeople = () => ({
  type: FETCH_FAMOUS_PEOPLE,
});

export const fetchFamousPeopleSuccess = data => ({
  type: FETCH_FAMOUS_PEOPLE_SUCCESS,
  payload: {
    data,
  },
});
