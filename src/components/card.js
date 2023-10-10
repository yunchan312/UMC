import styled from "styled-components";
import { useState } from "react";

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
  box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.7);
  z-index: 1;
  :hover {
    cursor: pointer;
  }
`;
const MovieTitle = styled.div`
  width: 200px;
  text-align: center;
  margin: 10px;
  user-select: none;
`;
const Overlay = styled.div`
  border-radius: 20px;
  width: 225px;
  height: 400px;
  position: absolute;
  z-index: 2;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Poster = styled.img`
  margin-top: 10px;
`;
const Overview = styled.div`
  height: 300px;
  overflow: auto;
`;

export default function MovieCard({
  vote_average,
  overview,
  poster_path,
  title,
}) {
  const [isOverlay, setIsOverlay] = useState(false);
  const handleCardClick = () => {
    setIsOverlay((prev) => !prev);
  };
  return (
    <Card onClick={handleCardClick}>
      {isOverlay ? (
        <Overlay>
          ⭐{`${vote_average}`} <br />
          <br />
          <Overview>{`${overview}`}</Overview>
        </Overlay>
      ) : null}
      <Poster
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        alt="none"
      />
      <MovieTitle>{title}</MovieTitle>
    </Card>
  );
}
