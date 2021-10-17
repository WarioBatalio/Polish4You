import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'languageChanger',
    initialState: {
        language: "English",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { changeLanguage } = slice.actions;

export default slice.reducer;