import Movie from "../Movie/Movie";

const MovieList = ({movies, onUpdateBookmark, onUpdateLike}) => {

  const row_css = {
      maxWidth: "900px",
      margin: "50px auto 0"
  };

  return ( 
    <div style={row_css}>
      { movies.map(movie=><Movie key={movie.id} {...movie} onUpdateBookmark={onUpdateBookmark} onUpdateLike={onUpdateLike} />) }
    </div>
   );
}
 
export default MovieList;