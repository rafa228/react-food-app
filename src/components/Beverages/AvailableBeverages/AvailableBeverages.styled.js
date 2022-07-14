import styled from "styled-components";

const DrinksLoader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > img {
    width: 200px;
    height: 200px;
  }
`;

const DrinksError = styled.div`
  text-align: center;
  color: rgb(247, 9, 9);
`;

const Drinks = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #69068a;
`;

export { DrinksLoader, DrinksError, Ul, Drinks };
