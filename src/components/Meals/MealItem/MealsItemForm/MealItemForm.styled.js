import styled from "styled-components";

const Form = styled.div`
  text-align: right;
  padding-top: 2rem;

  & > button {
    font: inherit;
    cursor: pointer;
    background-color: #69068a;
    border: 1px solid #69068a;
    color: #fff;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & > button:hover, & > button:active{
    background-color: #b19cd9;
    border-color: #69068a;
  }
`;

export { Form };
