import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieList.css";
import Card from "../components/Card";
export default function MovieList({type}) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  console.log(movieList)
useEffect(() => {
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type || "popular"}`, // Fallback to "popular" if type is undefined
        {
          params: {
            api_key: apiKey,
            page: page,
          },
        }
      );
      if (page === 1) {
        setMovieList(response.data.results); // Reset the list if it's the first page
      } else {
        setMovieList((prevMovies) => [...prevMovies, ...response.data.results]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchMovies();
}, [page, type, apiKey]);

// Handler for scrolling
const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2 && !loading) {
        setPage(prevPage => prevPage + 1);
    }
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [loading]);
  return (
    <div className="container">
      <div className="row my-4 p-3 d-flex justify-content-center">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
      {loading && <div className="spinner-border text-primary my-5" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}

    </div>
  );
}
