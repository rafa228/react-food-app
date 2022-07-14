import React, { useState } from "react";

import Header from "../Layout/Header/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import MealsCategory from "../Meals/MealsCategory/MealsCategory";
import OverviewImg from '../Layout/OverviewImg';

const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <OverviewImg />
        <MealsSummary />
        <main>
          <MealsCategory />
        </main>
      </CartProvider>
    </>
  );
};

export default HomePage;
