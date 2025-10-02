"use client"
import { useParams, useNavigate } from "react-router-dom"

function MovieDetails({ movies }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((m) => m.id === Number.parseInt(id))

  if (!movie) {
    return (
      <div className="container">
        <div className="no-movies">Movie not found</div>
      </div>
    )
  }

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="details-content">
        <img src={movie.posterURL || "/placeholder.svg"} alt={movie.title} className="details-poster" />

        <div className="details-info">
          <h1>{movie.title}</h1>
          <div className="details-rating">⭐ {movie.rating.toFixed(1)} / 10</div>
          <p className="details-description">{movie.description}</p>
        </div>
      </div>

      {movie.trailerURL && (
        <div className="trailer-section">
          <h2>Watch Trailer</h2>
          <div className="trailer-container">
            <iframe
              src={movie.trailerURL}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
