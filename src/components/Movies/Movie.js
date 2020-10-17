import React from "react";

export default function Movie(props) {
  return (
    <div className="movie">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${props.img})`,
        }}
        className="img"
      ></div>
      <div className="title-info">
        <h3 className="h1">{props.title}</h3>
        <p className="rating">Rating: {props.rating}</p>
      </div>
    </div>
  );
}
