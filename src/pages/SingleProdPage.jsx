import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import useFetch from "../Components/useFetch";
import SinglePageProd from "../Components/SinglePageProd";
import { Loader } from "../Components/MovieContainer";

const SingleProdPage = () => {
  const { id } = useParams();

  const { data: movie, isLoading, error } = useFetch(`&i=${id}`);

  console.log(movie);

  if (isLoading) {
    return (
      <Loader>
        <div className="loader"></div>
      </Loader>
    );
  }

  if (error.show) {
    return (
      <Loader>
        {error.msg}
        <Link to="/movies" className="btn">
          Back to movies
        </Link>
      </Loader>
    );
  }

  return (
    <Wrapper>
      <div className="btn-container">
        <Link to="/movies" className="btn">
          Back to movies
        </Link>
      </div>
      <SinglePageProd {...movie} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 13rem 4rem;

  @media screen and (max-width: 686px) {
    padding: 13rem 1rem;
  }

  .btn-container {
    margin: 4rem 6rem;
  }

  .btn {
    font-size: 1.3rem;
    color: #fff;
    background-color: #13c6e2;
    transition: all 0.3s;
    border-radius: 8px;
    padding: 0.5rem;

    &:hover {
      background-color: #1377e2;
    }
  }
`;
export default SingleProdPage;
