import styled from "styled-components";

const AuthContainer = styled.div`
  margin: auto;
  width: 50%;
  max-width: 28rem;
  margin-top: -10rem;
  border-radius: 15px;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  padding: 1rem;
  text-align: center;
  position: relative;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  & > h1 {
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 4px rgb(113, 3, 113);
  }

  @media (max-width: 550px){
    & {
        width: 100%;
        max-width: 20rem;
    }
  }
`;

const FormControl = styled.div`
  margin-bottom: 0.5rem;
  
  & > input {
    font: inherit;
    background-color: #f1e1fc;
    color: rgb(113, 3, 113);
    border-radius: 5px;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }

  & > label {
    display: block;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px rgba(105, 6, 138, 1);
  }

`;

const InvalidFormInput = styled.input`
  font: inherit;
  background-color: #fff;
  color: rgb(113, 3, 113);
  border-radius: 5px;
  border: 1px solid rgb(237, 5, 5);
  width: 100%;
  text-align: left;
  padding: 0.25rem;
`;

const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    cursor: pointer;
    font: inherit;
    color: #fff;
    background-color: rgba(105, 6, 138, 1);
    /* box-shadow: 2px 2px rgba(105, 6, 138, 1); */
    border-radius: 10px;
    padding: 0.5rem 2.5rem;
  }

  & > button:hover {
    background-color: rgba(225, 70, 252, 1);
    color: rgba(105, 6, 138, 1);
    box-shadow: 0 1px 4px #fff;
  }
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  color: #eab5f5;
  border: none;
  padding: 0.15rem 1.5rem;

  &:hover {
    background-color: transparent;
    color: #eab5f5;
  }
`;

export { AuthContainer, ToggleButton, FormControl, InvalidFormInput, Actions };
