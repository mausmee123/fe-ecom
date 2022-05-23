import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: null,
    value: 0
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {
            return {
                ...state,
                value: state.value + 1
            };
        },
        decrement: (state) => {
            return {
                ...state,
                value: state.value - 1
            };
        }
    }
});

export const { increment, decrement } = authSlice.actions;

export default authSlice.reducer;
