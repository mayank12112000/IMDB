import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css"
export default function Card({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the movie is already in favorites when the component loads
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setIsFavorite(favoriteMovies.some(favMovie => favMovie.id === movie.id));
  }, [movie.id]);

  const handleFavoriteToggle = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites if already favorited
      updatedFavorites = favoriteMovies.filter(favMovie => favMovie.id !== movie.id);
    } else {
      // Add to favorites if not already favorited
      updatedFavorites = [...favoriteMovies, movie];
    }
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };
  return (
      <div key={movie.id} className="m-2 movie-card">
        <i onClick={handleFavoriteToggle} className={`fa ${isFavorite?"bookmark-blue":""} fa-bookmark fs-5`} aria-hidden="true"></i>
        <Link to={`/movie/${movie.id}`} className="link">
        <img
          loading="lazy"
          className="card-img"
          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          alt=""
          />
        <div className="movie-desc">
        <p className="title fs-6">
            {movie.original_title}
        </p>
        </div>
          </Link>

      </div>
  );
}
