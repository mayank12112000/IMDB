import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./movieDetails.css";
export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  console.log(movie);
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.warn(err));
  }, [id]);
  if (movie)
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm my-2 d-flex">
            <img className="movie-detail-picture movie-detail-image" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
          </div>
          <div className="col-sm my-2">
            <h2 className="">{movie.title} </h2>
            {movie.adult ? <p className="text-danger">A rated</p> : <></>}
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm my-3 languages d-flex align-items-center">
            <div>
              <span className="fs-5">Language:</span>
            </div>
            {movie &&
              movie.spoken_languages.map((lang) => (
                <div key={lang.name} className="mx-2 genre">
                  <span>{lang.name}</span>
                </div>
              ))}
          </div>
          <div className="col-sm my-3 genres d-flex align-items-center">
            <div>
              <span className="fs-5">Genre:</span>
            </div>
            {movie &&
              movie.genres.map((genre) => (
                <div key={genre.id} className="mx-2 genre">
                  <span>{genre.name}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="d-flex my-2 justify-content-between align-items-center">
          <span className="fs-5">Useful Links</span>
          <Link to={"/"}>
            <button className="btn btn-danger">
              Homepage{" "}
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </button>
          </Link>
          <a target="_blank" href={movie.homepage}>
            <button className="btn btn-warning">
              Offical Site{" "}
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </button>
          </a>
        </div>
        <div className="row my-3">
        <div className="fs-5 my-3">Production House:</div>


        {movie && movie.production_companies &&
          movie.production_companies.map((company) => (
              <div key={company.id} className="col-sm">
              {company.logo_path && (
                  <span className="productionCompanyImage">
                  <img className="movie__productionComapany" loading="lazy"
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}/>
                  <span className="mx-3 fs-5">{company.name}</span>
                </span>
              )}
            </div>
          ))}
          </div>
      </div>
    );
}
