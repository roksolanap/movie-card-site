import { useMovieContext } from '../../contexts/MovieContext';
import '../../css/Favourites.css'
import MovieCard from '../MovieCard';

function Favourites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className='movies-grid'>
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
    </div>
    );
}

export default Favourites;