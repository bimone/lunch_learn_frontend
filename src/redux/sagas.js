import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import faker from 'faker';
import { FETCH_FAMOUS_PEOPLE, FETCH_MORE_FAMOUS_PEOPLE, FETCH_MORE_FAMOUS_PEOPLE_SUCCESS } from './actionsTypes';
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

function generateRandomPeople(numberOfPeople) {
  const people = [];
  for (let i = 0; i < numberOfPeople; i += 1) {
    people.push({
      name: faker.name.findName(),
      queryUrl: faker.random.word(),
    });
  }

  return people;
}

function* fetchMoreFamousPeople() {
  yield delay(1000);
  const data = yield generateRandomPeople(5);
  yield put({ type: FETCH_MORE_FAMOUS_PEOPLE_SUCCESS, payload: { data } });
}


export function* famousPeopleSaga() {
  yield takeEvery(FETCH_FAMOUS_PEOPLE, fetchFamousPeople);
  yield takeLatest(FETCH_MORE_FAMOUS_PEOPLE, fetchMoreFamousPeople);
}
