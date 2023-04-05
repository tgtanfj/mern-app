import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts)
        console.log('posts', posts)
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (error) {
        console.log(error)
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPosts, action.payload)
        yield put(actions.createPosts.createPostsSuccess(post.status))
    } catch (error) {
        console.log(error)
        yield put(actions.createPosts.createPostsFailure(error))
    }
}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePosts, action.payload)
        yield put(actions.updatePosts.updatePostsSuccess(updatePost.data))
    } catch (error) {
        console.log(error)
        yield put(actions.updatePosts.updatePostsFailure(error))
    }
}
// delete
function* deletePostSaga(action) {
    try {
        const deletePost = yield call(api.deletePosts, action.payload)
        yield put(actions.deletePosts.deletePostsSuccess(action.payload))
        console.log('data check ne: ', deletePost.status, typeof(deletePost.status))
    } catch (error) {
        console.log(error)
        yield put(actions.deletePosts.deletePostsFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga)
    yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga)
    yield takeLatest(actions.deletePosts.deletePostsRequest, deletePostSaga)
}

export default mySaga