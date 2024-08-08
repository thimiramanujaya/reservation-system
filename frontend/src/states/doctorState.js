import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: 'doctors',
    initialState: {
        doctors: [],
        isLoading: false
    },
    reducers: {
        fetchDoctors: (state) => {
            state.isLoading = true;
        },
        fetchDoctorsSuccess: (state, action) => {
            state.doctors = action.payload;
            state.isLoading = false;
        },
        fetchDoctorsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { fetchDoctors, fetchDoctorsSuccess, fetchDoctorsFailure} = doctorSlice.actions;

export default doctorSlice.reducer