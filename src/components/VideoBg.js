import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({movieId}) => {

    //we will use USEselector() to get trailer video data from store
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

    useMovieTrailer(movieId);

  return(
  <div>
    <iframe 
    width="560" 
    height="315" 
    src={"https://www.youtube.com/embed/" + trailerVideo?.key}
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
    </iframe>
  </div>
  )
}

export default VideoBg;

