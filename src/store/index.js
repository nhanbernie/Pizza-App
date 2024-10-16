import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/authReducer'; // Giả sử bạn đã có authReducer
import productReducer from './reducers/productReducer'; // Thêm productReducer
import rootSaga from './sagas/rootSaga'; // Sẽ tạo file rootSaga kết hợp cả authSaga và productSaga

const sagaMiddleware = createSagaMiddleware();

// Kết hợp các reducer
const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer, // Thêm productReducer
});

// Tạo store với middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// Chạy rootSaga
sagaMiddleware.run(rootSaga);

export default store;
