import { styled } from "styled-components";

const Sponsor = () => {
  return (
    <Wrapper>
      <img
        src="https://w7.pngwing.com/pngs/723/883/png-transparent-netflix-app-logo-tech-companies-thumbnail.png"
        alt="logo"
        className="img"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcB4TYAKBJr_G5Lh196-pJ_yTD5H-c3oSP4FsxhiGNTsSVXIBcsy1cxGJARUJCkl8Y6w&usqp=CAU"
        alt="logo"
        className="img"
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0khUNK74FQ0XDWBB7Jx5IbBrmWg2rZhdSF0PUHWOuq95xd-DG-pkZDgmNLF8nZWL6NE8&usqp=CAU"
        alt="logo"
        className="img"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png"
        alt="logo"
        className="img"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 15rem 10rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .img {
    width: 14rem;
  }
`;
export default Sponsor;
