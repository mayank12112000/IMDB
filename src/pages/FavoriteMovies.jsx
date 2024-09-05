import React, { useEffect, useState } from "react";
import Card from "../components/Card"; // Reuse the Card component to display favorites

export default function FavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Load favorite movies from localStorage when the component mounts
    const favoriteMoviesFromStorage = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(favoriteMoviesFromStorage);
  }, []);

  return (
    <div className="container">
      <h2>Your Favorite Movies</h2>
      <div className="row my-4 p-3 d-flex justify-content-center">
        {favoriteMovies.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          favoriteMovies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
}
