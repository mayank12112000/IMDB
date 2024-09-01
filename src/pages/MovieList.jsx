import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieList.css";
import Card from "../components/Card";
export default function MovieList() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  const { type } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=${apiKey}`
      )
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.warn(err));
  }, [type]);
  return (
    <div className="container">
        <h2>{type==="upcoming"?"Upcoming":type==="top_rated"? "Top Rated":"Popular"}</h2>
      <div className="row my-4 p-3 d-flex justify-content-center">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}
