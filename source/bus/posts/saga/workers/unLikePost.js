//Core
import { put, apply, select } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unLikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);
        if (response.status !== 204) {
            throw new Error(message);
        }

        const liker = yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        });

        yield put(postsActions.unLikePost({ liker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unLikePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
