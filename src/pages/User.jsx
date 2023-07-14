import { styled } from "styled-components";
import FormInput from "../Components/Form";

const User = () => {
  return (
    <Wrapper>
      <FormInput />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 11rem 8rem;

  @media screen and (max-width: 550px) {
    padding: 11rem 4rem;
  }
  @media screen and (max-width: 370px) {
    padding: 11rem 2rem;
  }

  height: 80vh;
`;
export default User;
