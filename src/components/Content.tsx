import { MovieCard } from "./MovieCard";

interface ContentProps {
  movie: {
    imdbID: string;
    Title:string;
    Poster:string;
    Runtime:string;
    Ratings:Array<{
      Source: string;
      Value: string;
    }>
  }
}

export function Content(props : ContentProps) {
  return(
    <MovieCard 
      key ={props.movie.imdbID} 
      title={props.movie.Title} 
      poster={props.movie.Poster} 
      runtime={props.movie.Runtime} 
      rating={props.movie.Ratings[0].Value} 
    />
  );
}