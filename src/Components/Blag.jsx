import React from "react";
import axios from "axios";
import { useState } from "react";

const Blag = () => {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [randomJoke, setRandomJoke] = useState("");

  const generateJoke = () => {
    axios.get(URL).then((res) => {
      setRandomJoke(res.data);
    });
  };

  return (
    <div className="container joke-container">
      <h1 className="joke-type">{randomJoke.type}</h1>
      <p className="joke-setup">{randomJoke.setup}</p>
      <p className="joke-punch">{randomJoke.punchline}</p>
      <button className="generate-joke" onClick={generateJoke}>
        Generate Joke
      </button>
    </div>
  );
};

export default Blag;
