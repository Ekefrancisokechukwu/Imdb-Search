/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const SinglePageProd = ({
  Actors: actors,
  Director: director,
  Released: release,
  Title: title,
  // imdbVotes: vote,
  Poster: poster,
  Plot: plot,
  Type: type,
  Writer: writers,
  Ratings,
  Country: country,
  Genre: genre,
}) => {
  return (
    <Wrapper>
      <img src={poster} alt={title} className="poster" />

      <div className="">
        <h1 className="header">{title}</h1>

        <p className="plot">{plot}</p>

        <div className="more-info">
          <ul>
            <li>
              <span className="dot">Actors: </span>
              {actors}.
            </li>
            <li>
              <span className="dot">Country: </span>
              {country}.
            </li>
            <li>
              <span className="dot">Director: </span>
              {director}.
            </li>
            <li>
              <span className="dot">Genre: </span>
              {genre}.
            </li>
            <li>
              <span className="dot">Released: </span>
              {release}.
            </li>
            <li>
              <span className="dot">Type: </span>
              {type}.
            </li>
            <li>
              <span className="dot">Writer: </span>
              {writers}.
            </li>
          </ul>
        </div>

        <div className="rating">
          <h1 className="head">Ratings</h1>
          <div className="rate">
            {Ratings.map((rating, index) => {
              return (
                <div style={{ marginTop: "1rem" }} key={index}>
                  <h1 className="header-source">{rating.Source}</h1>
                  <h2 className="num">{rating.Value}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 0 6rem;
  display: flex;
  gap: 9rem;

  @media screen and (max-width: 932px) {
    flex-direction: column;
  }
  @media screen and (max-width: 686px) {
    padding: 0 1rem;
  }

  .poster {
    width: 50rem;
    border-radius: 8px;
    @media screen and (max-width: 686px) {
      width: 100%;
    }
  }

  .header {
    font-size: 2.6rem;
  }

  .plot {
    margin-top: 2rem;
    font-size: 1.7rem;
  }

  .more-info {
    font-size: 1.4rem;
    margin-top: 2rem;

    li {
      margin-top: 0.9rem;
    }
  }

  .dot {
    color: #13b3e3;
  }

  .rating {
    margin-top: 3rem;

    .head {
      font-size: 2.1rem;
    }
  }
  .header-source {
    font-size: 1.4rem;
    color: #13b3e3;

    @media screen and (max-width: 378px) {
      font-size: 1rem;
    }
  }

  .rate {
    display: flex;
    align-items: center;
    gap: 4rem;
    text-align: center;
    flex-wrap: wrap;

    @media screen and (max-width: 378px) {
      flex-direction: column;
      text-align: left;
      align-content: flex-start;
    }
  }
`;

export default SinglePageProd;
