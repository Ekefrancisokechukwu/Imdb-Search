import { styled } from "styled-components";
import { useGlobalContext } from "./context";
import SingleMovie from "./SingleMovie";

const MovieContainer = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <Loader>
        <div className="loader"></div>
      </Loader>
    );
  }

  return (
    <Wrapper>
      {movies.map((movie) => {
        return <SingleMovie key={movie.imdbID} {...movie} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  padding: 3rem 2rem;

  @media screen and (max-width: 378px) {
    padding: 3rem 1rem;
  }
`;

export const Loader = styled.div`
  height: 70vh;
  display: grid;
  place-items: center;
  .loader {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #2a96e3;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default MovieContainer;
