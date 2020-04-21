import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import api from '../../api';
import { SUBMIT_FORM_TO_SERVER_START, submitFormFailure, submitFormSuccess } from './forms.actions';

function* sendMessageSaga({payload}) {
 try {
  const data = yield call(api.sendemail, payload);
  yield put(submitFormSuccess(data))
 } catch(err) {
   yield put(submitFormFailure(err));
 }
}

export default [
  takeLatest(SUBMIT_FORM_TO_SERVER_START, sendMessageSaga),
];
