import React from "react";
import useInput from "../../../hooks/use-input";

import classes from "./Checkout.module.css";
import * as Styled from './Checkout.styled';

const Checkout = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    // if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    //   return;
    // }

    console.log(`${name}, ${street}, ${postalCode}, ${city}`);

    props.onConfirm({
      name: name,
      street: street,
      city: city,
      postalCode: postalCode,
    });

  };

  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;

  return (
    <Styled.Form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={street}
        />
        {streetHasError && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={postalCode}
        />
        {postalCodeHasError && (
          <p>Postal Code cannot be empty</p>
          // <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={city}
        />
        {cityHasError && <p>Please enter a valid city!</p>}
      </div>
      <Styled.Actions>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <Styled.SubmitButton>Confirm</Styled.SubmitButton>
      </Styled.Actions>
    </Styled.Form>
  );
};

export default Checkout;
