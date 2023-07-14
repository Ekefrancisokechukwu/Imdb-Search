import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BiUser } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Wrapper>
      <h1 className="logo">
        IMDB <span>Search</span>
      </h1>
      <nav className="navbar">
        <ul
          className={`${isNavOpen ? "isactive active" : "isactive close"}`}
          onClick={() => setIsNavOpen(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/user">
              <BiUser />
            </Link>
          </li>
        </ul>

        <button className="menu-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
          <MdMenu />
        </button>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #ffffff46;
  backdrop-filter: blur(20rem);
  padding: 2rem 6rem;
  border-bottom: 1px solid #76727247;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 589px) {
    padding: 2rem 2rem;
    backdrop-filter: none;
    background: #ffffff8a;
  }

  .logo {
    font-size: 2.3rem;
    span {
      color: #2a96e3;
    }
  }

  .menu-btn {
    background: none;
    border: none;
    outline: none;
    display: inline-block;
    font-size: 2.2rem;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 589px) {
      display: block;
    }
  }

  .active {
    @media screen and (max-width: 589px) {
      transition: all 0.3s;
      visibility: visible;
    }
  }

  .close {
    @media screen and (max-width: 589px) {
      opacity: 0;
      visibility: hidden;
    }
  }

  .navbar {
    @media screen and (max-width: 589px) {
      /* display: none; */
    }

    .isactive {
      display: flex;
      align-items: center;
      gap: 5rem;

      @media screen and (max-width: 589px) {
        position: fixed;
        flex-direction: column;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        background: white;
        padding: 2rem;
        justify-content: center;
        gap: 1rem;
        border-radius: 7px;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
      }

      a {
        display: inline-block;
        padding: 1rem;
        font-size: 1.4rem;
        color: #333;
        border-bottom: 2px solid transparent;
        transition: all 0.3s;

        &:hover {
          border-bottom: 2px solid #2a96e3;
        }
      }
    }
  }
`;

export default Header;
