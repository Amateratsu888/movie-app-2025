"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddMovie({ onAddMovie }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMovie = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL || "/abstract-movie-poster.png",
      rating: Number.parseFloat(formData.rating),
      trailerURL: formData.trailerURL,
    }

    onAddMovie(newMovie)
    navigate("/")
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <div className="container">
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <h2>Add New Movie</h2>

        <div className="form-group">
          <label className="form-label">Title *</label>
          <input
            type="text"
            name="title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter movie title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description *</label>
          <textarea
            name="description"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter movie description"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Poster URL</label>
          <input
            type="url"
            name="posterURL"
            className="form-input"
            value={formData.posterURL}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rating (0-10) *</label>
          <input
            type="number"
            name="rating"
            className="form-input"
            value={formData.rating}
            onChange={handleChange}
            required
            min="0"
            max="10"
            step="0.1"
            placeholder="8.5"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Trailer URL (YouTube Embed)</label>
          <input
            type="url"
            name="trailerURL"
            className="form-input"
            value={formData.trailerURL}
            onChange={handleChange}
            placeholder="https://www.youtube.com/embed/..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Add Movie
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMovie
