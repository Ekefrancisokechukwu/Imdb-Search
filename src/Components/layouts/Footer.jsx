import { styled } from "styled-components";
import { FaTiktok } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logbox">
        <FaTiktok />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillYoutube />
        <AiFillFacebook />
      </div>

      <ul className="footer-link">
        <li>
          <a href="#">Get the App</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Site Industry</a>
        </li>
        <li>
          <a href="#">Box Office</a>
        </li>
        <li>
          <a href="#">Advert</a>
        </li>
      </ul>

      <p>
        Specter Original &copy; <span>{new Date().getFullYear()}</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 4rem 2rem;

  .logbox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    font-size: 2rem;
  }

  .footer-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 3rem;
    font-size: 1.5rem;

    @media screen and (max-width: 503px) {
      flex-direction: column;
      gap: 1rem;
    }

    a {
      color: #000;
      display: inline-block;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #000;
      }
    }
  }

  p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default Footer;
