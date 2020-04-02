import {
  all,
} from 'redux-saga/effects';
// import { getProductsSaga } from './products/products.saga';
import sendMessageSaga  from './forms/forms.saga';

function* rootSaga() {
  yield all([
    ...sendMessageSaga,
  ]);
}

export default rootSaga;
