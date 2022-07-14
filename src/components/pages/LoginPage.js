import React from "react";
import CartProvider from "../../store/CartProvider";
import AuthForm from "../Auth/AuthForm";
import Header from "../Layout/Header/Header";
import OverviewImg from "../Layout/OverviewImg";

const LoginPage = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <OverviewImg />
          <AuthForm />
          <br></br>
      </CartProvider>
    </>
  );
};

export default LoginPage;
