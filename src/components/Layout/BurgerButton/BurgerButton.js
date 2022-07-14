import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './BurgerButton.styled';

const BurgerButton = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

//types of props like using tsx
BurgerButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerButton;
