/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SingleMovie = ({
  imdbID: id,
  Poster: poster,
  Type: genre,
  Title: title,
  Year: year,
}) => {
  return (
    <Wrapper>
      <Link to={`/movies/${id}`}>
        <img
          src={
            poster === "N/A"
              ? "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
              : poster
          }
          alt={title}
        />
        <div className="overlay">
          <h3>{title}</h3>
          <h4>{year}</h4>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20rem;
  width: 29rem;

  @media screen and (max-width: 589px) {
    width: 100%;
  }

  position: relative;

  &:hover .overlay {
    padding: 2rem;
    height: 100%;
    opacity: 1;
  }

  img {
    border-radius: 9px;
  }

  .overlay {
    background: linear-gradient(40deg, #00000049, #000000a3);
    position: absolute;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    color: #fff;
    text-align: center;
    border-radius: 9px;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    opacity: 0;

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.3rem;
    }
  }
`;
export default SingleMovie;
