import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieList.css"
export default function MovieList() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movieList,setMovieList] = useState([])
    console.log(movieList)
    const {type} = useParams()
    useEffect(()=>{
       axios
       .get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`)
       .then((res)=>setMovieList(res.data.results))
       .catch((err)=>console.warn(err))
    },[type])
  return (
          <div className="row my-4">
            {movieList.map((movie)=>(
                <div key={movie.id} className="m-3 movie-card">
                    <img loading="lazy" className="card-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    {/* <p>{movie.original_title}</p> */}
                </div>
            ))}
    </div>
  );
}
