import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "./movieList.css";
import Filters from "../components/Filters";

export default function MovieList() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [releaseYearRange, setReleaseYearRange] = useState([2000, 2024]);
  const [ratingRange, setRatingRange] = useState([0, 10]);
  const { type } = useParams();

  // Fetch genres when the component mounts
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.warn(err));
  }, [apiKey]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const endpoint = `https://api.themoviedb.org/3/discover/movie`;

        const params = {
          api_key: apiKey,
          page: page,
          with_genres: selectedGenre,
          "primary_release_date.gte": `${releaseYearRange[0]}-01-01`,
          "primary_release_date.lte": `${releaseYearRange[1]}-12-31`,
          "vote_average.gte": ratingRange[0],
          "vote_average.lte": ratingRange[1],
          sort_by: "popularity.desc",
        };


        const response = await axios.get(endpoint, { params });
        if (page === 1) {
          setMovieList(response.data.results); // Reset movie list on first page load
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
  }, [selectedGenre, releaseYearRange, ratingRange, page, apiKey]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <div>
        <i
          className="fa fa-filter filter-icon my-1 ms-5 fs-4 filters-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          aria-hidden="true"
        ></i>
      </div>
      <div className="container">
        <h2>{type === "upcoming" ? "Upcoming" : type === "top_rated" ? "Top Rated" : "Popular"}</h2>

        <Filters
          setReleaseYearRange={setReleaseYearRange}
          setRatingRange={setRatingRange}
          selectedGenre={selectedGenre}
          genres={genres}
          releaseYearRange={releaseYearRange}
          ratingRange={ratingRange}
          setSelectedGenre={setSelectedGenre}
        />

        {/* Movie List */}
        <div className="row my-4 p-3 d-flex justify-content-center">
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Load more on scroll */}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
}
