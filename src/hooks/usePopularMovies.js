import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies = () =>{
  //FETCH DATA FROM TBDM API and UPDATE THE STORE WITH API
  const dispatch = useDispatch();

  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular'
      , API_OPTIONS);
      const json = await data.json();
      console.log(json.results);

      dispatch(addPopularMovies(json.results));

  };

  useEffect(()=>{
    getPopularMovies();
  }, [])
};

export default usePopularMovies;