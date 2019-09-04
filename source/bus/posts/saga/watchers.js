//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { createPost } from './workers/createPost';
import { fillPosts } from './workers/fetchPosts';
import { removePost } from './workers/removePost';
import { likePost } from './workers/likePost';
import { unLikePost } from './workers/unLikePost';

function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

function* watchUnLikePost () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unLikePost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFillPosts), call(watchRemovePost), call(watchLikePost), call(watchUnLikePost)]);
}
