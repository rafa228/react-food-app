import styled from "styled-components";

const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
  padding-bottom: 500px;
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  & > label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & > input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
`;

const SubmitButton = styled.button`
  border: 1px solid #69068a;
  background-color: #69068a;
  color: #fff;
  
  &:hover, &:active {
    background-color: #b19cd9;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & > button {
    font: inherit;
    color: #69068a;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  & > button:hover,
  & > button:active {
    background-color: #b19cd9;
  }
`;

const InvalidInput = styled.input`
  border-color: red;
  background-color: #fff;
`;

export { Form, Control, SubmitButton, Actions, InvalidInput };