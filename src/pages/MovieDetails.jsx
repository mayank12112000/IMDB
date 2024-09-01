import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./movieDetails.css"
export default function MovieDetails() {
    const [movie,setMovie] = useState(null)
    console.log(movie)
    const apiKey = import.meta.env.VITE_API_KEY;
    const {id} = useParams()
    useEffect(()=>{
        axios
        .get(` https://api.themoviedb.org/3/movie/${ id }?api_key=${apiKey}&language=en-US`)
        .then((res)=>setMovie(res.data))
        .catch(err=>console.warn(err))
    },[id])
  if (movie)
    return (
    <div className="container">
        <div className='row'>
            <div className="col-sm my-2 d-flex">
            <img className="movie-detail-picture" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            </div>
            <div className="col-sm my-2">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    </div>
  )
}
