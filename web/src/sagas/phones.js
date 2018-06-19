import {
	GET_PHONES,
	GET_SELECTED_PHONE,
	SET_PHONES,
	SET_SELECTED_PHONE,
	FETCH_FAILED
} from '../actions/action-types';
import {getPhones, getPhoneById} from '../services/phones-api';
import {call, put, takeLatest} from 'redux-saga/effects';

function* fetchPhones() {
	try {
		const phones = yield call(getPhones);
		yield put({type: SET_PHONES, phones});
	} catch (error) {
		yield put({type: FETCH_FAILED, error});
	}
}

function* fetchPhone(action) {
	try {
		const selectedPhone = yield call(getPhoneById, action.id);
		yield put({type: SET_SELECTED_PHONE, selectedPhone});
	} catch (error) {
		yield put({type: FETCH_FAILED, error});
	}
}

export default function* rootSaga() {
	yield takeLatest(GET_PHONES, fetchPhones);
	yield takeLatest(GET_SELECTED_PHONE, fetchPhone);
}
