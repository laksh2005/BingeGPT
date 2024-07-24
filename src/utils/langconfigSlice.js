import { createSlice } from "@reduxjs/toolkit";

const langconfigSlice = createSlice({
    name: "config",
    initialState: {
        lang:"en",
    },
    reducers:{
        changeLang: (state,action) => {
            state.lang = action.payload;
        },
    },
});

export const {changeLang} = langconfigSlice.actions;

export default langconfigSlice.reducer;