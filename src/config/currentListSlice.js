import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "New List",
    movies: [],
    disabled: false
}

const currentListSlice = createSlice({
    name: "currentList",
    initialState: initialState,
    reducers: {
        changeName : (state, action) => {
            state.name = action.payload;
        },
        addMovie : (state,action) => {
            if (!state.movies.find(item => {
                return item.imdbID === action.payload.imdbID;
            })) {
                state.movies.push(action.payload)
            }
        },
        removeMovie : (state, action) => {
            state.movies = state.movies.filter(item => {
                return item.imdbID !== action.payload.imdbID
            })
        },
        reset: (state) => {
            state.name = "New List";
            state.movies = [];
            state.disabled = false;
        },
        disable: (state) => {
            state.disabled = true;
        },
        enable: (state) => {
            state.disabled = false;
        }
    }
})

export const { changeName,addMovie,removeMovie,reset,disable,enable } = currentListSlice.actions;

export default currentListSlice.reducer;