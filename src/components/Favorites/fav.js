import React, { useState, useEffect } from "react";
import { api } from "../../movie-api";

export default function Fav(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    const id = props.id;
    const getData = async () => {
      const res = await api.getDetails(id);
      setData(res);
    };
    getData();
    console.log(data);
  }, []);
  return (
    <div className="fav-component">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
        }}
        className="img"
      ></div>
      <div className="title-info">
        <h3 className="h1">{data.title}</h3>
        <p className="rating">Rating: {data.vote_average}</p>
      </div>
    </div>
  );
}
