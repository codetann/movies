import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";

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
    </Router>
  );
}

export default App;
