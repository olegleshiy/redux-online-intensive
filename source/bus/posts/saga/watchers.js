//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { createPost } from './workers/createPost';
import { fillPosts } from './workers/fetchPosts';

function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFillPosts)]);
}
