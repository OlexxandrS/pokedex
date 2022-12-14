import React from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <div className="main">
      <p>My favorite Pokemon is Bulbasaur</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
