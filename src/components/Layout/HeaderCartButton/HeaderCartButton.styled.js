import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  font: inherit;
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 0.75rem 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-weight: bold;
  margin: 0px;
  color: ${(props) => props.btnIsHighlighted ? `red` : `white`};
  animation: ${(props) =>
    props.btnIsHighlighted ? "bump 300ms ease-out" : ""};

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
