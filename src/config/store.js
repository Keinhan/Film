import { configureStore } from "@reduxjs/toolkit";
import currentListReducer from "./currentListSlice";
import currentMovieReducer from "./currentMovie";
import favoriteListsReducer from "./favoriteLists";


export const store = configureStore({
    reducer: {
        currentList: currentListReducer,
        currentMovie: currentMovieReducer,
        fovariteLists: favoriteListsReducer
    },
})