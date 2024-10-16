import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './authSaga'; 
import { watchFetchProductsSaga } from './productSaga'; 

// Kết hợp tất cả các sagas vào rootSaga
export default function* rootSaga() {
    yield all([
        watchLoginSaga(), 
        watchFetchProductsSaga(), 
    ]);
}
