// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'

import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import doctorsReducer from './states/doctorState.js'
import patientsReducer from './states/patientState.js'
import reservationsReducer from './states/reservationState.js'
import doctorSaga from './sagas/doctorSaga.js'
import patientSaga from './sagas/patientSaga.js'
import reservationSaga from './sagas/reservationSaga.js'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    patients: patientsReducer,
    reservations: reservationsReducer,
  },
  middleware: ()=> [saga],
});

saga.run(doctorSaga)
saga.run(patientSaga)
saga.run(reservationSaga)
 
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
