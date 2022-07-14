import * as Styled from './CartItem.styled';
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Styled.CartItem>
      <div>
        <h2>{props.name}</h2>
        <Styled.Summary>
          <Styled.Price>{price}</Styled.Price>
          <Styled.Amount>x {props.amount}</Styled.Amount>
        </Styled.Summary>
      </div>
      <Styled.Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Styled.Actions>
    </Styled.CartItem>
  );
};

export default CartItem;
