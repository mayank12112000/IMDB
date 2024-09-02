import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css"
export default function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
      <div key={movie.id} className="m-2 movie-card">
        <i className="fa fa-bookmark fs-5" aria-hidden="true"></i>
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
