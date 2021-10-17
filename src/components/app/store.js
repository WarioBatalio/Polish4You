import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../languageChanger/languageChangerSlice';

export default configureStore({
    reducer: {
        languageChanger: languageReducer,
    },
});
