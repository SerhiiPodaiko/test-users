import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import GetResourceApi from "../../services/Api"

export const fetchGetAllUsers = createAsyncThunk(
    "users/fetchGetAllUsers",
    async (_ , {rejectWithValue}) => {
        const {data, error} = await GetResourceApi.getAllUsers()

        if (error) {
            return rejectWithValue(`Server error: ${error.message}`)
        }

        return  data
    }
)

const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [fetchGetAllUsers.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchGetAllUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [fetchGetAllUsers.rejected]: (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        },
    }
})

export default usersSlice.reducer
