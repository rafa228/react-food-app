import React, { useState } from "react";

import Header from "../Layout/Header/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import OverviewImg from "../Layout/OverviewImg";
import Orders from "../AccountNav/Orders/Orders";

const OrderPage = () => {
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
        <main>
          {/* <Account /> */}
          <Orders />
        </main>
      </CartProvider>
    </>
  );
};

export default OrderPage;
