import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchDoctorsSuccess } from '../states/doctorState';
import axios from 'axios'

function* getDoctorsFetch() {
    const response = yield call(() => axios.get('/api/doctors/'));
    const doctors = response.data;
    yield put(fetchDoctorsSuccess(doctors))
}

function* doctorSaga() {
    yield takeEvery('doctors/fetchDoctors', getDoctorsFetch)
}

export default doctorSaga