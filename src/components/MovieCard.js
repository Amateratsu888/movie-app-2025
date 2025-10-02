"use client"
import { useNavigate } from "react-router-dom"

function MovieCard({ movie }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.posterURL || "/placeholder.svg"} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-rating">⭐ {movie.rating.toFixed(1)}</div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  )
}

export default MovieCard
