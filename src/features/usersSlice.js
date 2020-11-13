import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { getRequest } from "../services/requestService";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (query) => {
    return await getRequest('/users', query);
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            usersAdapter.upsertMany(state, action.payload)
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload
        },
    }
});

export default usersSlice.reducer

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users);



