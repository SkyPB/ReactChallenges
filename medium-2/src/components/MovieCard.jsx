import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3 className="movie-card-title">{movie.title}</h3>
    </div>
  );
}
