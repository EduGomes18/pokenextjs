import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((serverRes) => {
      if (serverRes.ok) {
        return serverRes.json();
      }
    })
    .then((resObject) => {
      return resObject.pokemon_entries;
    });

  return {
    props: {
      pokemons,
    },
  };
}

function Home(props) {
  const { pokemons } = props;

  return (
    <Container>
      <div>
        <h1>Kanto Pokemons</h1>
      </div>
      <div>
        <ul>
          {pokemons.map((poke) => {
            return <li key={poke.entry_number}>{poke.pokemon_species.name}</li>;
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Home;
