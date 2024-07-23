import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies= () =>{
  //FETCH DATA FROM TBDM API and UPDATE THE STORE WITH API
  const dispatch = useDispatch();

  const getTopRatedMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1'
      , API_OPTIONS);
      const json = await data.json();
      console.log(json.results);

      dispatch(addTopRatedMovies(json.results));

  };

  useEffect(()=>{
    getTopRatedMovies();
  }, [])
};

export default useTopRatedMovies;
 