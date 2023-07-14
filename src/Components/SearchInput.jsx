import { styled } from "styled-components";
import { useGlobalContext } from "./context";

const SearchInput = () => {
  const { setQuery, query, error } = useGlobalContext();
  const { show, msg } = error;
  return (
    <Form onSubmit={(e) => e.target.preventDefault()}>
      <h1>
        {" "}
        <span>Search</span> For Movie{" "}
      </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="movie info..."
      />

      <p style={{ color: "#af0a15" }}>{show && msg}</p>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 8rem;
  text-align: right;
  @media screen and (max-width: 510px) {
    text-align: center;
  }
  @media screen and (max-width: 370px) {
    padding: 2rem 3rem;
  }

  h1 {
    margin-top: 2rem;

    span {
      color: #1bb0e2;
    }
  }

  input {
    margin-top: 1.4rem;
    padding: 0.8rem;
    width: 40rem;
    outline: 0;
    border: 1px solid #000;
    border-radius: 7px;

    @media screen and (max-width: 510px) {
      width: 25rem;
    }

    @media screen and (max-width: 370px) {
      width: 100%;
    }

    &:focus {
      border: 1px solid #1bb0e2;
    }
  }
`;
export default SearchInput;
