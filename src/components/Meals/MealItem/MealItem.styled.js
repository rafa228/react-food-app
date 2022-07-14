import styled from "styled-components";

const Meal = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 1rem; */
  padding-bottom: 1rem;
  /* border: 2px solid red; */

  &.h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #69068a;
  font-size: 1.25rem;
`;

const Title = styled.div`
  color: #69068a;
  /* border: 2px solid red; */

  & > img {
    margin-top: 10px;
    border-radius: 0.5rem;
    height: 150px;
    max-width: 250px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  & > img:hover {
    transform: scale(1.3);
    transition: width 2s, height 2s;
    transition-timing-function: ease-in;
    transition-delay: 2s;
    background-size: contain;
    box-shadow: 0 0 5px #69068a;
    opacity: 1;
  }

  @media screen and (max-width: 490px){
       & {
        margin-right: 10px;
       }
    }
`;

const MealAdd = styled.div`
    display: flex;
    /* border: 2px solid red; */
    margin-right: 1rem;

    @media screen and (max-width: 490px){
        & {
            display: flex;
            align-items: flex-end;
        }
    }
`;

export { Meal, Description, Price, Title, MealAdd};