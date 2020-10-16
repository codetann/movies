import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="title">Movies</h1>
      <ul className="links">
        <li>Movies</li>
        <li>TV Shows</li>
        <li>Favorites</li>
      </ul>
      <form className="search" action="submit">
        <i className="fas fa-search"></i>
        <input placeholder="Search" type="text" />
      </form>
    </div>
  );
}
