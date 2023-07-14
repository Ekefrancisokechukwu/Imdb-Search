import { styled } from "styled-components";

const Explore = () => {
  return (
    <Wrapper>
      <h1 className="header">More to explore</h1>

      <div className="">
        <h2 className="subHeader">Best search</h2>

        <div className="bestcontainer">
          <a href="#" className="article">
            <img src="https://pbs.twimg.com/media/E6qyZzoXIAMR3cy.jpg" alt="" />
            <h3>Dune</h3>
          </a>

          <a href="#" className="article">
            <img
              src="https://www.riotgames.com/darkroom/1120/055c9b3b73db3a1d3d46d88750d57857:7e0c146cd7ff25e4c9d2b48bf13e8865/arcane-final-poster-16x9-no-text-no-border.jpg"
              alt=""
            />
            <h3>Arcane</h3>
          </a>

          <a href="#" className="article">
            <img
              src="https://eikhu9b6e94.exactdn.com/wp-content/uploads/2020/01/the-mandalorian-banner-1.jpg?strip=all&lossy=0&quality=80&webp=80&avif=80&ssl=1"
              alt=""
            />
            <h3>Mandalorian</h3>
          </a>

          <a href="#" className="article">
            <img
              src="https://deadline.com/wp-content/uploads/2021/01/Bridgerton.jpg"
              alt=""
            />
            <h3>Bridgerton</h3>
          </a>

          <a href="#" className="article">
            <img
              src="https://i.ytimg.com/vi/V_wSj_1fWtY/maxresdefault.jpg"
              alt=""
            />
            <h3>Warrior</h3>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 3rem;

  .header {
    color: #ffd900c7;
    font-size: 2.3rem;
  }

  .subHeader {
    color: #2a96e3;
    margin-top: 4rem;
  }

  .article {
    height: 25rem;
    background: #ffff;

    img {
      border-radius: 8px;
    }

    h3 {
      color: #000;
      font-size: 1.3rem;
      padding: 1rem;
    }

    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      transform: translateY(-1rem) scale(1.07);
      transition: transform 0.3s ease-in-out;
    }
  }

  .bestcontainer {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    column-gap: 1rem;
    row-gap: 5rem;
  }
`;
export default Explore;
