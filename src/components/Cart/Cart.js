import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout/Checkout';
import * as Styled from './Cart.styled';

//assets
import success from '../../assets/sucess_order.png';
import send_order from '../../assets/send_order.png';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-foodapp-c8cbb-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
      <Styled.CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
      </Styled.CartItems>
  );

  const modalActions = (
    <Styled.Actions>
      <button className='button--alt' onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler}>
          Order
        </button>
      )}
    </Styled.Actions>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <Styled.Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Styled.Total>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <Styled.LoadingOrder>
    <img src={send_order} alt="send-order" />
    <p>Sending order data...</p>
    </Styled.LoadingOrder>;

  const didSubmitModalContent = (
    <React.Fragment>
      <Styled.OrderSuccess>
        <img src={success} alt="success_order" />
        <p>Successfully sent the order! <br />Our driver will deliver the meals to you!</p>
      </Styled.OrderSuccess>
      <Styled.Actions>
      <button onClick={props.onClose}>
        Close
      </button>
      </Styled.Actions>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
