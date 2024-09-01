import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./homepage.css";
import MovieList from "./MovieList";

export default function Homepage() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => setPopularMovies([...res.data.results]))
      .catch((err) => console.log(err))
      .finally(() => console.log("fetched"));
  }, [apiKey]);

  return (
    <>
      <Carousel autoPlay={true} showArrows={true} showThumbs={false} renderIndicator={false} infiniteLoop={true}>
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <img 
              loading="lazy" className="carousel-image"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <p className="carousel-legend">{movie.original_title}</p>
          </div>
        ))}
      </Carousel>
      <MovieList/>

      </>
  );
}
