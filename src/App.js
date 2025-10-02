"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import AddMovie from "./components/AddMovie"
import { initialMovies } from "./data/movies"
import "./App.css"

function App() {
  const [movies, setMovies] = useState(initialMovies)

  const handleAddMovie = (newMovie) => {
    setMovies((prev) => [...prev, newMovie])
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <Link to="/" className="logo">
              Movie<span>DB</span>
            </Link>
            <Link to="/add">
              <button className="nav-button">+ Add Movie</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
          <Route path="/add" element={<AddMovie onAddMovie={handleAddMovie} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
