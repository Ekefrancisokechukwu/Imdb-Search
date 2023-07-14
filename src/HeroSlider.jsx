import Slider from "react-slick";
import { styled } from "styled-components";

const HeroSlider = () => {
  var settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    easing: "easeInOut",
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://milnersblog.files.wordpress.com/2017/11/star-wars-the-last-jedi-japanese-movie-poster-in-english-banner.jpg?w=1200"
            alt=""
          />
          <span className="cover"></span>
          <div className="info">
            <h1>
              Lorem ipsum dolor sit amet{" "}
              <span>consectetur adipisicing elit. Praesentium</span>
              recusandae, reprehenderit eaque asperiores obcaecati
              exercitationem odit!
            </h1>
          </div>
        </div>

        <div className="slide">
          <img
            src="https://i.ytimg.com/vi/VpZLK_rq8iM/maxresdefault.jpg"
            alt=""
          />
          <span className="cover"></span>
          <div className=""></div>
        </div>

        <div className="slide">
          <img
            src="https://redanianintelligence.com/wp-content/uploads/2023/06/poster-wide.jpg"
            alt=""
          />
          <span className="cover"></span>

          <div className="info">
            <h1 style={{ fontWeight: 500 }}>Enjoy on your search</h1>

            <p
              style={{
                color: "#2a96e3",
                fontSize: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              t amet consectetur lhjbdhjn ejnd adipisicing elit. Eligendi, ipsa.
            </p>
          </div>
        </div>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .slick-slide {
    /* @media screen and (max-width: 841px) {
      width: auto !important;
    } */
  }

  .slide {
    position: relative;
    height: 100vh;

    .cover {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(to right, #000000a9, #000008d0, #aba7a79b);
    }

    .info {
      position: absolute;
      padding: 3rem;
      top: 30%;
      /* width: 50%; */

      @media screen and (min-width: 841px) {
        width: 50%;
      }
    }

    h1 {
      font-size: 1.9rem;

      color: #fff;
      font-weight: 200;
      letter-spacing: 5px;

      @media screen and (min-width: 841px) {
        font-size: 3rem;
      }

      span {
        font-weight: 500;
        color: #d5d819;
      }
    }
  }
`;
export default HeroSlider;
