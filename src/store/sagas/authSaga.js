import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/authActions';
import axios from 'axios';

function loginApi(email, password) {
    return axios.post('https://api-demo-4gqb.onrender.com/users/login', { email, password });
}

function* loginSaga(action) {
    try {
        const response = yield call(loginApi, action.payload.email, action.payload.password);
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(loginFailure(error.response?.data?.message || 'Login failed'));
    }
}

// LOGIN_REQUEST
export function* watchLoginSaga() {
    yield takeLatest('LOGIN_REQUEST', loginSaga);
}
// All saga
export default function* rootSaga() {
    yield all([watchLoginSaga()]);
}
