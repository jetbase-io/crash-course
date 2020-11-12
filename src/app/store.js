import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import skillsSlice from "../features/skillsSlice";
import educationSlice from "../features/educationSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        skills: skillsSlice,
        education: educationSlice
    },
});

export default store;