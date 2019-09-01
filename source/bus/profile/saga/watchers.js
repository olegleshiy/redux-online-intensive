//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { worker } from './workers';

function* watchWorker () {
    yield takeEvery(types.FILL_PROFILE, worker);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
