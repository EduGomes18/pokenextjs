import React, { useState, useEffect } from "react";

import { Container, Title, Button, BtnArea, PrevBtn } from "./styles";

import { useRouter } from "next/router";

export async function getServerSideProps({ query: { page = 0 } }) {
  const pokes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
  )
    .then((serverRes) => {
      if (serverRes.ok) {
        return serverRes.json();
      }
    })
    .then((resObject) => {
      const response = JSON.parse(JSON.stringify(resObject.results));

      return response;
    });

  return {
    props: {
      pokes,
      page,
    },
  };
}

function Home(props) {
  const router = useRouter();

  const { page } = props;

  const { pokes } = props;

  return (
    <Container>
      <Title>Kanto Pokemons</Title>

      <ul>
        {pokes.map((poke) => {
          const id = poke.url.replace(/\//g, " ").split(" ").reverse()[1];
          return (
            <li key={poke.name}>
              <h2>{poke.name}</h2>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <BtnArea>
        <PrevBtn
          onClick={() =>
            router.push(
              `/?page=${Number(page) !== 0 ? Number(page) - 20 : Number(page)}`
            )
          }
        >
          Prev
        </PrevBtn>
        <Button
          style="background-color:#fff;"
          onClick={() => router.push(`/?page=${Number(page) + 20}`)}
        >
          Next
        </Button>
      </BtnArea>
    </Container>
  );
}

export default Home;
