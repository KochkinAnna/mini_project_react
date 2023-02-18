import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null
}

const getMovies = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(1);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getMovies
}

export {
    moviesReducer,
    moviesActions
}