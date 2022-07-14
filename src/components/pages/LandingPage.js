import React from "react";
import Header from "../Layout/Header/Header";
import Content from "../../Content/Content"
import CartProvider from "../../store/CartProvider";

const LandingPage = () => {
  return (
    <>
      <CartProvider>
        <Header />
          <Content />
      </CartProvider>
    </>
  );
};

export default LandingPage;
