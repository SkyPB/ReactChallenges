import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiKey = "ba601e7beb04fa8334825e41115cf572";
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            searchTerm
          )}&include_adult=false&language=en-US&page=1`
        );
        const data = await response.json();
        console.log(data);
        if (!data.results || data.results.length === 0) {
          console.log("No movies found.");
          setMovies([]);
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (searchTerm) {
      fetchMovies();
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="movies-grid">
        {movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
}
