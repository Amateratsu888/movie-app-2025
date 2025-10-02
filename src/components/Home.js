"use client"

import { useState } from "react"
import Filter from "./Filter"
import MovieList from "./MovieList"

function Home({ movies }) {
  const [titleFilter, setTitleFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState(0)

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesRating = movie.rating >= ratingFilter
    return matchesTitle && matchesRating
  })

  return (
    <div className="container">
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default Home
