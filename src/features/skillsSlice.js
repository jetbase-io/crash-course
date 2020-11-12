import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { getRequest } from "../services/requestService";

const skillsAdapter = createEntityAdapter();

const initialState = skillsAdapter.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async (query) => {
    const res = await getRequest('/skills', query);
    return res?.data
});

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSkills.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchSkills.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            skillsAdapter.upsertMany(state, action.payload)
        },
        [fetchSkills.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload
        },
    }
});

export default skillsSlice.reducer

export const {
    selectAll: selectAllSkills,
    selectById: selectUserById,
} = skillsAdapter.getSelectors((state) => state.skills);



