import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { storage } from "../../storage";

import { api } from "../../movie-api";

export default function Header() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  const [genre, setGenre] = useState([]);
  const [year, setYear] = useState("");

  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    // fetches a random title for the trending tv shows

    const getData = async () => {
      const res = await api.trending();
      const randomNum = Math.floor(Math.random() * res.results.length);
      const temp = res.results[randomNum];
      setData(res.results[randomNum]);
      setImg(res.results[randomNum].backdrop_path);
      setGenre(api.getGenre(res.results[randomNum].genre_ids));
      setYear(
        temp.release_date
          ? temp.release_date.substring(0, 4)
          : temp.first_air_date.substring(0, 4)
      );
    };
    getData();
  }, []);

  const test = () => {
    console.log(data);
  };

  return (
    <div
      style={
        (props,
        {
          backgroundImage: `url(https://image.tmdb.org/t/p/original${img})`,
        })
      }
      className="header"
    >
      <h1 className="h1">{data.title || data.name}</h1>
      <span className="info">
        <p>{`${genre[0]}, ${genre[1]}`}</p>
        <i className="fas fa-calendar-week"></i>
        <p>{year}</p>
      </span>
      <span className="ratings">
        <p className="rating">Rating: {data.vote_average}</p>
        <p className="learn-more">Learn More</p>
      </span>
    </div>
  );
}
