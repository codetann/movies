import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";

import storage from "../../storage";

import "./home.css";

const list = [];

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <div className="home">
      <NavBar />
      <Header />
    </div>
  );
}
