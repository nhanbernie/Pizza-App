import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './authSaga'; // Saga của auth
import { watchFetchProductsSaga } from './productSaga'; // Saga của product

// Kết hợp tất cả các sagas vào rootSaga
export default function* rootSaga() {
    yield all([
        watchLoginSaga(),  // Lắng nghe các action của auth
        watchFetchProductsSaga(), // Lắng nghe các action của product
    ]);
}
