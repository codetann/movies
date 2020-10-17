import React from "react";
import NavBar from "../Home/NavBar";
import Movie from "../Movies/Movie";
import Fav from "./fav";
import "./favorites.css";

import { storage } from "../../storage";
import { api } from "../../movie-api";

export default function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("ids"));

  const list = [];

  const getMovies = async () => {
    for (let i = 0; i < favorites.length; i++) {
      const data = await api.getDetails(favorites[i]);
      console.log(data);
    }
  };

  return (
    <div className="favorites">
      <NavBar />
      <h1>Favorites</h1>
      <div className="fav-container">
        {favorites.map((item, i) => (
          <Fav key={i} id={item} />
        ))}
      </div>
    </div>
  );
}
