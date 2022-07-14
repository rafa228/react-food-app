import { useContext } from "react";

import MealItemForm from "./MealsItemForm/MealItemForm";
import * as Styled from './MealItem.styled';
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
    });
  };

  return (
    <>
      <Styled.Meal>
        <Styled.Title>
          <img
            alt={props.image}
            src={props.image}
          />
          <h3>{props.name}</h3>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.Price>{price}</Styled.Price>
        </Styled.Title>
        <Styled.MealAdd>
          <MealItemForm onAddToCart={addToCartHandler} />
        </Styled.MealAdd>
      </Styled.Meal>
    </>
  );
};

export default MealItem;
