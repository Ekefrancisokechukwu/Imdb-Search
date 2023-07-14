import { styled } from "styled-components";
import MovieContainer from "../Components/MovieContainer";
import SearchInput from "../Components/SearchInput";

const Movies = () => {
  return (
    <>
      <Hero>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/4da1951f-16cd-49dc-b27b-151ad93a8928/NG-en-20230710-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </Hero>
      <SearchInput />
      <MovieContainer />
    </>
  );
};

const Hero = styled.div`
  height: 40vh;
`;
export default Movies;
