import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import skillsSlice from "../features/skillsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        skills: skillsSlice
    },
});

export default store;