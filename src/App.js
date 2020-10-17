import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Selected from "./components/Selected/Selected";
import Favorite from "./components/Favorites/Favorites";

import { api } from "./movie-api";

function App() {
  const [name, setName] = useState("");

  const log = async () => {
    const data = await api.search(name);
    console.log(data);
  };
  return (
    <Router className="App">
      <Route path="/" exact component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/selected" exact component={Selected} />
      <Route path="/favorites" component={Favorite} />
    </Router>
  );
}

export default App;
