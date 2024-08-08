import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchReservationsSuccess } from '../states/reservationState';
import axios from 'axios'

function* getReservationsFetch() {
    const response = yield call(() => axios.get('/api/reservations/'));
    const reservations = response.data;
    yield put(fetchReservationsSuccess(reservations))
}

function* reservationSaga() {
    yield takeEvery('reservations/fetchReservations', getReservationsFetch)
}

export default reservationSaga