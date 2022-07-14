import * as Styled from './Card.styled';

const Card = props => {
  return <Styled.Card>{props.children}</Styled.Card>
};

export default Card;