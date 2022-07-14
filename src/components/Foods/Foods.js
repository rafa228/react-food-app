import React, { useState } from "react";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import Cart from "../Cart/Cart";
import Meals from "../Meals/Meals";
import Header from "../Layout/Header/Header";
import CartProvider from "../../store/CartProvider";
import OverviewImg from "../Layout/OverviewImg";

const Foods = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <OverviewImg />
        <MealsSummary />
        <Meals />
      </CartProvider>
    </>
  );
};

export default Foods;
