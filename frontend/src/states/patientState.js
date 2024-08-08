import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
    name: 'patients',
    initialState: {
        patients: [],
        isLoading: false
    },
    reducers: {
        fetchPatients: (state) => {
            state.isLoading = true;
        },
        fetchPatientsSuccess: (state, action) => {
            state.patients = action.payload;
            state.isLoading = false;
        },
        fetchPatientsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { fetchPatients, fetchPatientsSuccess, fetchPatientsFailure} = patientSlice.actions;

export default patientSlice.reducer