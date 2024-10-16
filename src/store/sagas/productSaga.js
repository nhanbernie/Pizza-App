import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';

function fetchProductsApi() {
  return axios.get('https://api-demo-4gqb.onrender.com/products');
}

function* fetchProductsSaga() {
  try {
    const response = yield call(fetchProductsApi);
    // Kiểm tra và chỉ lấy data từ response
    yield put(fetchProductsSuccess(response.data.data)); // Truy cập đúng vào thuộc tính data
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProductsSaga() {
  yield takeLatest('FETCH_PRODUCTS_REQUEST', fetchProductsSaga);
}
