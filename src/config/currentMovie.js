import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {
        Title: "",
        Poster: "",
        imdbID: "",
        Year: ""
    },
}

const currentMovieSlice = createSlice({
    name: "currentMovie",
    initialState: initialState,
    reducers: {
        setCurrentMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})

export const { setCurrentMovie } = currentMovieSlice.actions;

export default currentMovieSlice.reducer;