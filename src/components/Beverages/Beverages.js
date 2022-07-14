import React, { useState } from "react";
import MealsSummary from "../Meals/MealsSummary/MealsSummary";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header/Header";
import CartProvider from "../../store/CartProvider";
import AvailableBeverages from "./AvailableBeverages/AvailableBeverages";
import OverviewImg from "../Layout/OverviewImg";
// import { useParams } from "react-router-dom";

const Beverages = () => {
  // const { id } = useParams();
  // console.log(id);
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
        <AvailableBeverages />
      </CartProvider>
    </>
  );
};

export default Beverages;
