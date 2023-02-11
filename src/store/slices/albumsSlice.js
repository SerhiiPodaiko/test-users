import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import GetResourceApi from "../../services/Api"

export const fetchGetAllAlbumsUser = createAsyncThunk(
    "albums/fetchGetAllUsers",
    async (id , {rejectWithValue}) => {
        const {data, error} = await GetResourceApi.getAllAlbumsUser(id)

        if (error) {
            return rejectWithValue(`Server error: ${error.message}`)
        }

        return  data
    }
)

const initialState = {
    albums: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [fetchGetAllAlbumsUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchGetAllAlbumsUser.fulfilled]: (state, action) => {
            state.loading = false
            state.albums = action.payload
        },
        [fetchGetAllAlbumsUser.rejected]: (state, action) => {
            state.loading = false
            state.albums = []
            state.error = action.payload
        },
    }
})

export default usersSlice.reducer
