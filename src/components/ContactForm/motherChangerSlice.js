import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'polishLevelChange',
    initialState: {
        polishLevel: "A1.1",
    },
    reducers: {
        changePolishLevel: (state, action) => {
            state.polishLevel = action.payload;
        },
    },
});

export const { changePolishLevel } = slice.actions;

export default slice.reducer;