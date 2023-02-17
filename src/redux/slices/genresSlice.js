import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genres:[],
    errors:null,
    loading:null
}

const genresSlice = createSlice({
    name:  'genresSlice',
    initialState,
    reducers: {
        getGenres:(state, action)=>{
            state.genres = action.payload
        }
    }
});

const {reducer:genresReducer, actions:{getGenres}} = genresSlice;

const genresActions = {
    getGenres
}

export {
    genresReducer,
    genresActions
}