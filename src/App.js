import { movies } from "./api";
import { styled } from "styled-components";
import MovieCard from "./components/card";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Wrapper>
      {movies.results.map((movie) => (
        <>
          <MovieCard
            key={movie.id}
            vote_average={movie.vote_average}
            overview={movie.overview}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        </>
      ))}
    </Wrapper>
  );
}

export default App;
