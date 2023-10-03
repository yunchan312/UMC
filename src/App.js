import { movies } from "./api";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 90%;
  :hover {
    scale: 1.1;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.7);
  }
`;
const Card = styled.div`
  border-radius: 20px;
  border: 3px dashed ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.green};
  margin: 30px;
  height: 400px;
  transition: 1s;
  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
  box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.7);
  z-index: 1;
  :hover {
    scale: 1;
    box-shadow: none;
  }
`;
const MovieTitle = styled.div`
  width: 200px;
  text-align: center;
  margin: 10px;
  user-select: none;
`;
const Overlay = styled.div`
  opacity: 0;
  border-radius: 20px;
  width: 225px;
  height: 400px;
  position: absolute;
  z-index: 2;
  padding: 10px;
`;
const Poster = styled.img`
  margin-top: 10px;
`;
const Overview = styled.div`
  height: 300px;
  overflow: auto;
`;
function App() {
  return (
    <Wrapper>
      {movies.results.map((movie) => (
        <>
          <Card>
            <Overlay>
              ⭐{`${movie.vote_average}`} <br />
              <br />
              <Overview>{`${movie.overview}`}</Overview>
            </Overlay>
            <Poster
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="none"
            />
            <MovieTitle>{movie.original_title}</MovieTitle>
          </Card>
        </>
      ))}
    </Wrapper>
  );
}

export default App;
