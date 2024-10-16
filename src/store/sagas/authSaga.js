import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/authActions';
import axios from 'axios';

// Hàm gọi API đăng nhập
function loginApi(email, password) {
    return axios.post('https://api-demo-4gqb.onrender.com/users/login', { email, password });
}

// Saga xử lý đăng nhập
function* loginSaga(action) {
    try {
        const response = yield call(loginApi, action.payload.email, action.payload.password);
        yield put(loginSuccess(response.data)); // Thành công
    } catch (error) {
        yield put(loginFailure(error.response?.data?.message || 'Login failed')); // Xử lý lỗi
    }
}

// Lắng nghe action LOGIN_REQUEST
export function* watchLoginSaga() {
    yield takeLatest('LOGIN_REQUEST', loginSaga);
}

// Export default rootSaga kết hợp tất cả sagas
export default function* rootSaga() {
    yield all([watchLoginSaga()]);
}
