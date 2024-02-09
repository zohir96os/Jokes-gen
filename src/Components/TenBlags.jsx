import React from "react";
import axios from "axios";
import { useState } from "react";

const Blags = () => {
  const URL = "https://official-joke-api.appspot.com/jokes/ten";
  const [jokes, setJokes] = useState([]);

  const generateJoke = () => {
    axios.get(URL).then((res) => {
      setJokes(res.data);
    });
  };

  return (
    <div className="container jokes-container">
      {jokes.map((joke, index) => (
        <div className="jokes" key={index}>
          <h1 className="joke-type" key={index}>
            {joke.type}
          </h1>
          <p className="joke-setup">{joke.setup}</p>
          <p className="joke-punch">{joke.punchline}</p>
        </div>
      ))}
      <button className="generate-joke" onClick={generateJoke}>
        Generate Joke
      </button>
    </div>
  );
};

export default Blags;
