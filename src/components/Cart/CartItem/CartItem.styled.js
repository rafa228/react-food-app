import styled from "styled-components";

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #69068a;
  padding: 1rem 0;
  margin: 1rem 0;

  & > h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  & > button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #69068a;
    border: 1px solid #69068a;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & > button:hover,
  & > button:active {
    background-color: #69068a;
    color: #fff;
  }
`;

const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  color: #69068a;
`;

const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #69068a;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #69068a;
    border: 1px solid #69068a;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & > button:hover {
    background-color: rgba(179, 69, 252, 1);
    color: #fff;
  }

  @media (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`;

export { CartItem, Summary, Amount, Price, Actions }