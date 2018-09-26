import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_FAMOUS_PEOPLE } from './actionsTypes';
import { fetchFamousPeopleSuccess } from './actions';


const FAMOUS_PEOPLE = [
  { name: 'GIJoe', queryUrl: 'gi+joe' },
  { name: 'Lt.Dan', queryUrl: 'lt+dan' },
  { name: 'Degommeuse', queryUrl: 'degommeuse' },
  { name: 'TitSmashell', queryUrl: 'TitSmashell' },
  { name: 'TiTanium', queryUrl: 'TiTanium' },
  { name: 'Bob Gratton', queryUrl: 'Bob+Gratton' },
  { name: 'Guy Fiery', queryUrl: 'Guy+Fiery' },
  { name: 'Guy Lafleur', queryUrl: 'Guy+Lafleur' },
  { name: 'Alain', queryUrl: 'Alain' },
];

function* fetchFamousPeople() {
  yield delay(2000);
  yield put(fetchFamousPeopleSuccess(FAMOUS_PEOPLE));
}

export function* famousPeopleSaga() {
  yield takeEvery(FETCH_FAMOUS_PEOPLE, fetchFamousPeople);
}
