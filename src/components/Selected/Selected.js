import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./selected.css";

import { api } from "../../movie-api";
import { storage } from "../../storage";

import NavBar from "../Home/NavBar";

export default function Selected(props) {
  const data = useLocation();
  const title = data.state.title;
  const img = `url(https://image.tmdb.org/t/p/original${data.state.img})`;
  const genre = api.getGenre(data.state.genre);
  console.log(genre.length);
  const release = data.state.release.substring(0, 4);
  const rating = data.state.rating;
  const id = data.state.id;
  const overview = data.state.overview;

  //! ISSUE WITH LOCALSTORAGE. WILL NOT SAVE AFTER REFRESH
  const addToFav = () => {
    storage.save(id);
  };

  console.log(data);
  return (
    <div className="selected-movie">
      <NavBar />
      <div className="selected-movie-container">
        <div className="img-container">
          <div style={{ backgroundImage: img }} className="backdrop"></div>
        </div>
        <div className="text-container">
          <h1>{title}</h1>
          <span className="sub-header">
            <i className="fas fa-calendar-week"></i>
            <h4>{release}</h4>
            {genre.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </span>
          <p className="rating">Rating: {rating}</p>
          <p>{overview}</p>

          <button onClick={addToFav} className="favorite">
            <i className="fas fa-star"></i>Add To Favorites
          </button>
          <button
            onClick={() => console.log(JSON.parse(localStorage.getItem("ids")))}
          >
            LOG
          </button>
        </div>
      </div>
    </div>
  );
}
