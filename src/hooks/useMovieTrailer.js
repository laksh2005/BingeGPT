import { useEffect } from "react";
import { addtrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = () =>{
    
    const dispatch = useDispatch();

    //FETCHING TRAILER VIDEO AND UPDATING THE STORE WITH TRAILER VIDEO DATA

    const getMovieVideos = async(movieId) =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+"519182"+"/videos"
          , API_OPTIONS);
    
        const json = await data.json();

        const filterdata = json.results?.filter((video) => video.type === "Trailer")
        const trailer = filterdata?.length ? filterdata[0] : json.results[0];
        console.log(trailer);
        
        dispatch(addtrailerVideo(trailer));

    };
    useEffect(()=>{
        getMovieVideos();
    }, [])

}

export default useMovieTrailer;