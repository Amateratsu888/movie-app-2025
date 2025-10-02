import MovieCard from "./MovieCard"

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <div className="no-movies">No movies found. Try adjusting your filters or add a new movie!</div>
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
