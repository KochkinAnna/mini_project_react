import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres: [],
    errors: null,
    loading: null
    // selectedGenre:null
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

// const getById = createAsyncThunk(
//     'genresSlice/getById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await genresService.getById(id);
//             return data.genres
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// )


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
            // .addCase(getById.fulfilled, (state, action) => {
            //     state.loading = false
            //     state.selectedGenre = action.payload
            // })
});

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getGenres
    // getById
}

export {
    genresReducer,
    genresActions
}