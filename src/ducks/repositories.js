import { takeEvery, put } from 'redux-saga/effects';
import { createAsyncAction } from './utils';

/**
 * CONSTANTS
 */
export const GET_REPOSITORIES = `repositories/GET_REPOSITORIES`;

/**
 * ACTION CREATORS
 */
export const actionGetRepositories = createAsyncAction(GET_REPOSITORIES);

/**
 * REDUCERS
 */
export default (state = {}, action) => {
    switch (action.type) {
        case `${actionGetRepositories.start}`:
            return Object.assign({}, state, {
               loading: true
            });
        case `${actionGetRepositories.success}`:
          return Object.assign({}, state, {
            repositories: action.payload,
            loading: false,
          });
        default:
          return {...state, loading: false};
  }
}

/**
 * SAGAS
 */
function* sagaGetRepositories(action) {
  yield put(actionGetRepositories.start());
  const data = yield fetch(`https://api.github.com/search/repositories?q=${action.payload}&sort=stars&order=desc`)
      .then(response => response.json());
  yield put(actionGetRepositories.success(data.items));
}

export function* saga() {
  yield takeEvery(actionGetRepositories, sagaGetRepositories)
}