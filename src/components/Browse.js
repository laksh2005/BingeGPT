import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          MAIN CONTAINER 
          - video bg
          - video title
          SECONDARY CONTAINER
          -movie list * n
          -cards * n
          */}
    </div>
  )
}

export default Browse;