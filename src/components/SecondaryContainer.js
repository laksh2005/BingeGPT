import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-44 pl-12 relative z-20">
        {movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />}
        {movies.popularMovies && <MovieList title={"Popular"} movies={movies.popularMovies} />}
        {movies.topratedMovies && <MovieList title={"Top-Rated"} movies={movies.topratedMovies} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;