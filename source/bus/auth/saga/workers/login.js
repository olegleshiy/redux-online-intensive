//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { loginAsync } from '../../../auth/actions';

export function* workerLogin ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());
        console.log('credentials', credentials);

        const response = yield apply(api, api.auth.login, [credentials]);
        console.log('response', response);
        //const { data: profile, message } = yield apply(response, response.json);

        //if (response.status !== 200) {
        //    throw new Error(message);
        //}
        credentials.remember ? localStorage.setItem('login', credentials.remember) : null;
        //yield put(loginAsync.loginAsync(profile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}