"use client"

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div className="filter-section">
      <h2 className="filter-title">Filter Movies</h2>
      <div className="filter-controls">
        <div className="filter-group">
          <label className="filter-label">Search by Title</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Enter movie title..."
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label className="filter-label">
            Minimum Rating: <span className="rating-display">{ratingFilter.toFixed(1)}</span>
          </label>
          <input
            type="range"
            className="filter-input"
            min="0"
            max="10"
            step="0.1"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number.parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}

export default Filter
