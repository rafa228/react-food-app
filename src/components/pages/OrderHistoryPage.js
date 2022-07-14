import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import OverviewImg from '../Layout/OverviewImg';
// import OrderLog from "../OrderHistory/OrderLog";
import Accordion from "../UI/Accordion/Accordion";

const OrderHistoryPage = () => {

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
          <Accordion />
        </main>
      </CartProvider>
    </>
  );
};

export default OrderHistoryPage;
