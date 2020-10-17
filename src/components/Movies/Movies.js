import React, { useState, useEffect } from "react";
import NavBar from "../Home/NavBar";
import { Link } from "react-router-dom";

import { api } from "../../movie-api";

import "./movies.css";
import Movie from "./Movie";

export default function Movies() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("popular");

  const getFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  useEffect(() => {
    const setMovies = async () => {
      const data = await api.getMovies(filter);
      setData(Object.values(data.results));
    };
    setMovies();
  }, [filter]);

  return (
    <div className="movies">
      <NavBar />
      <span className="filter">
        <select onChange={getFilter}>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
          <option value="now_playing">Now Playing</option>
        </select>
        <button onClick={() => console.log(data)}>LOG</button>
      </span>
      <div className="movie-container">
        {data.map((item, i) => (
          <Link
            key={i}
            to={{
              pathname: "/selected",
              state: {
                title: item.title,
                img: item.backdrop_path,
                genre: item.genre_ids,
                release: item.release_date,
                rating: item.vote_average,
                id: item.id,
                overview: item.overview,
              },
            }}
          >
            <Movie
              key={i}
              title={item.title}
              rating={item.vote_average}
              img={item.poster_path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
