import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: []
}

const favoriteLists = createSlice({
    name: "favoriteLists",
    initialState: initialState,
    reducers: {
        addList: (state, action) => {
            state.lists.push(action.payload);
        }
    }
})

export const { addList } = favoriteLists.actions;

export default favoriteLists.reducer;