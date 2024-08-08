import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
    name: 'reservations',
    initialState: {
        reservations: [],
        isLoading: false
    },
    reducers: {
        fetchReservations: (state) => {
            state.isLoading = true;
        },
        fetchReservationsSuccess: (state, action) => {
            state.reservations = action.payload;
            state.isLoading = false;
        },
        fetchReservationsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { fetchReservations, fetchReservationsSuccess, fetchReservationsFailure} = reservationSlice.actions;

export default reservationSlice.reducer