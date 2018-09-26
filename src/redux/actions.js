import { FETCH_FAMOUS_PEOPLE, FETCH_FAMOUS_PEOPLE_SUCCESS, FETCH_MORE_FAMOUS_PEOPLE } from './actionsTypes';

export const fetchFamousPeople = () => ({
  type: FETCH_FAMOUS_PEOPLE,
});

export const fetchFamousPeopleSuccess = data => ({
  type: FETCH_FAMOUS_PEOPLE_SUCCESS,
  payload: {
    data,
  },
});

export const fetchMoreFamousPeople = () => ({
  type: FETCH_MORE_FAMOUS_PEOPLE,
});
