import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addtrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topratedMovies = action.payload;
        }
    },
});


export const {addNowPlayingMovies, addtrailerVideo, addPopularMovies, addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;
