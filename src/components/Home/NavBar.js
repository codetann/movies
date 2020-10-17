import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  // const darkMode = () => {
  //   const body = document.querySelector("body");
  //   const h1 = document.querySelectorAll("h1");
  //   const h3 = document.querySelectorAll("h3");
  //   const li = document.querySelectorAll("li");
  //   const p = document.querySelectorAll("p");
  //   if (dark) {
  //     body.style.background = "#333";
  //     h1.forEach((item, i) => {
  //       item.style.color = "white";
  //     });
  //     h3.forEach((item, i) => {
  //       item.style.color = "white";
  //     });
  //     li.forEach((item, i) => {
  //       item.style.color = "white";
  //     });
  //     p.forEach((item, i) => {
  //       item.style.color = "white";
  //     });
  //   } else {
  //     body.style.background = "white";
  //     h1.forEach((item, i) => {
  //       item.style.color = "black";
  //     });
  //     h3.forEach((item, i) => {
  //       item.style.color = "black";
  //     });
  //     li.forEach((item, i) => {
  //       item.style.color = "black";
  //     });
  //     p.forEach((item, i) => {
  //       item.style.color = "black";
  //     });
  //   }

  // };

  return (
    <div className="navbar">
      <i className="fas fa-ticket-alt logo"></i>
      <h1 className="title h1">Movies.</h1>
      <ul className="links">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/movies">
          <li>Movies</li>
        </Link>
        <li>TV Shows</li>
      </ul>
      <form className="search" action="submit">
        <i className="fas fa-search"></i>
        <input placeholder="Search" type="text" />
      </form>
      <Link to="/favorites" className="fav">
        <i className="fas fa-star"></i>
      </Link>
      <li className="about">
        <i className="fas fa-question"></i>
      </li>
    </div>
  );
}
