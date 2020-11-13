import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { getRequest } from "../services/requestService";

const educationAdapter = createEntityAdapter();

const initialState = educationAdapter.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchEducation = createAsyncThunk('education/fetchEducation', async (query) => {
    const res = await getRequest('/education', query);
    return res?.data
});

const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchEducation.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchEducation.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            educationAdapter.upsertMany(state, action.payload)
        },
        [fetchEducation.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload
        },
    }
});

export default educationSlice.reducer

export const {
    selectAll: selectAllEducation,
    selectById: selectUserById,
} = educationAdapter.getSelectors((state) => state.education);



