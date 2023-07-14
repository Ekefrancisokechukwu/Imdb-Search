import { styled } from "styled-components";
import { useGlobalContext } from "./context";
import { Navigate } from "react-router-dom";

const FormInput = () => {
  const { user, setUser } = useGlobalContext();

  const HandleForm = (e) => {
    e.preventDefault();
    setUser("");
  };

  return (
    <Form onSubmit={HandleForm}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <label htmlFor="name"> Name:</label>
      <input
        type="text"
        name=""
        id="name"
        value={user}
        required
        onChange={(e) => setUser(e.target.value)}
      />

      <label htmlFor="email"> Email:</label>
      <input type="email" name="" id="email" required />
      <button>Submit</button>
    </Form>
  );
};

const Form = styled.form`
  width: 40rem;
  margin: 0 auto;
  background: #ffff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;

  @media screen and (max-width: 550px) {
    width: 100%;
  }

  label {
    font-size: 1.2rem;
  }
  input {
    padding: 0.7rem;
    outline: none;
  }

  button {
    background: #2a96e3;
    padding: 0.6rem;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background: #0e64a1;
      transition: all 0.3s;
    }
  }
`;
export default FormInput;
