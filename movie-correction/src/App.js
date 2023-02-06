import {useState} from 'react';

import './App.css';
import MovieList from './MovieList/MovieList';

function App() {

	const [movies, setMovies] = useState([
    {
      id: "4365",
      title: "Le Roi",
      date: "24 septembre 2019",
      category: "Drame historique",
      resume:
        "Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
      like: false,
      nbLike: 18,
      comment: 3,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=bVH7LurFHHc",
      image: "images/the-king.jpg"
    },
    {
      id: "5307",
      title: "Joker",
      date: "09 Octobre 2019",
      category: "Drame / Thriller",
      resume:
        "A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
      like: false,
      nbLike: 7,
      comment: 1,
      bookmark: true,
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      image: "images/joker.jpg"
    },
    {
      id: "6798",
      title: "Docteur Sleep",
      date: "30 Octobre 2019",
      category: "Fantasy / Thriller",
      resume:
        "Suite de Shining dans laquelle Danny, devenu adulte, est encore traumatisé et souffre de problèmes d'alcoolisme et de gestion de la colère. Comme son père.",
      like: false,
      nbLike: 10,
      comment: 6,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=BOzFZxB-8cw",
      image: "images/docteur-sleep.jpg"
    }
  ]);

	const onUpdateLike = (id, event)=>{
		event.preventDefault();

		const new_movies = movies.map(movie=>{
			if(id == movie.id){
				movie.like = !movie.like;
				movie.nbLike = movie.nbLike + (movie.like ? 1 : -1);
			}
			return movie;
		});
		setMovies(new_movies);
	}

	const onUpdateBookmark = (id, event)=>{

		event.preventDefault();

		const new_movies = movies.map(movie=>{
			if(id == movie.id){
				movie.bookmark = !movie.bookmark;
			}
			return movie;
		});
		setMovies(new_movies);
	}

	return (
		<MovieList movies={movies} onUpdateBookmark={onUpdateBookmark} onUpdateLike={onUpdateLike} />
	);
}

export default App;
