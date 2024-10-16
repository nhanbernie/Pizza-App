import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/authReducer'; 
import productReducer from './reducers/productReducer'; 
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer, 
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
