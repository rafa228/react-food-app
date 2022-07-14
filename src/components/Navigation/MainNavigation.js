import React, { useState } from "react";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";

const MainNavigation = () => {
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
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
      </CartProvider>
    </>
  );
};

export default MainNavigation;
