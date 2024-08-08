import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPatientsSuccess } from '../states/patientState';
import axios from 'axios'

function* getPatientsFetch() {
    const response = yield call(() => axios.get('/api/patients/'));
    const patients = response.data;
    yield put(fetchPatientsSuccess(patients))
}

function* patientSaga() {
    yield takeEvery('patients/fetchPatients', getPatientsFetch)
}

export default patientSaga