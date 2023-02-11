import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import GetResourceApi from "../../services/Api"

export const fetchGetAllPostsUser = createAsyncThunk(
    "posts/fetchGetAllUsers",
    async (id , {rejectWithValue}) => {
        try {
            const {data, error} = await GetResourceApi.getAllPostsUser(id)

            if (error) {
                throw new Error("Server Error")
            }

            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const initialState = {
    posts: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [fetchGetAllPostsUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchGetAllPostsUser.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [fetchGetAllPostsUser.rejected]: (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        },
    }
})

export default usersSlice.reducer
