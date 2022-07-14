import React from "react";
import * as Styled from './MealsCategory.styled';
import { Link } from "react-router-dom";
import foods from "../assets/foods.jpg";
import drinks from "../assets/drinks.jpg";

const MealsCategory = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Card>
        <Link style={{textDecoration: "none"}} to='/meals-cat'>
          <Styled.Header>
            <img src={foods} alt="foods" />
          </Styled.Header>
          <Styled.Content>
            <p>Available Foods</p>
          </Styled.Content>
        </Link>
        </Styled.Card>
        <Styled.Card>
        <Link style={{textDecoration: "none"}} to='/meals-cat'>
          <Styled.Header>
            <img src={drinks} alt="drinks" />
          </Styled.Header>
          <Styled.Content>
            <p>Available Beverages</p>
          </Styled.Content>
        </Link>
        </Styled.Card>
      </Styled.Container>
    </>
  );
};

export default MealsCategory;
