import styled from "styled-components";

const Meals = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  /* border: 2px solid red; */
  animation: meals-appear 1s ease-out forwards;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #69068a;
  }

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

const LoadMeals = styled.div`
    text-align: center;
    color: #fff;
`;

const MealsError = styled.div`
    text-align: center;
    color: rgb(240, 35, 35);
`;

export { Meals, LoadMeals, MealsError};