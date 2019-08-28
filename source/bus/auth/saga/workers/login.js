//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { loginAsync } from '../../../auth/actions';

export function* login ({ payload: credential }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.login, [credential]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(.loginAsync(profile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}