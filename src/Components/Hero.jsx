import { styled } from "styled-components";
import HeroSlider from "../HeroSlider";

const Hero = () => {
  return (
    <Wrapper>
      <HeroSlider />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  /* background: linear-gradient(to right, #000000a9, #000008d0, #aba7a79b),
    url("https://milnersblog.files.wordpress.com/2017/11/star-wars-the-last-jedi-japanese-movie-poster-in-english-banner.jpg?w=1200"); */

  height: 100vh;
`;
