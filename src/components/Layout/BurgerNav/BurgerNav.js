import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './BurgerNav.styled';


const BurgerNav = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/account" tabIndex={tabIndex} style={{marginBottom: "1rem"}}>
        <span aria-hidden="true"></span>
        Western Meals
      </a>
      <a href="/account" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        {/* <p>Account</p> */}
        Account
      </a>
      <a href="/order-history" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Order History
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        About us
        </a>
    </StyledMenu>
  )
}

BurgerNav.propTypes = {
  open: bool.isRequired,
}

export default BurgerNav;
