import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    page:null,
    errors: null,
    loading: null,
    selectedMovie:null
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getVideoById(id);
            return data
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
                const{page,results}=action.payload
                state.page=page
                state.movies = results
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.loading = true
                state.selectedMovie = action.payload
            })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getMovies,
    getMovieById
}

export {
    moviesReducer,
    moviesActions
}