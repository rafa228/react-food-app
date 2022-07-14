import React from 'react'
import * as Styled from './HoverCard.styled';

const HoverCard = (props) => {

  return (
    <Styled.HoverCard>
        <Styled.Ul>
            <li>
                <i></i>
            </li>
            <li>
                <i></i>
            </li>
            <li>
                <i></i>
            </li>
            <li>
                <i></i>
            </li>
        </Styled.Ul>
        <img src={props.image} alt={props.id}/>
        <Styled.Caption>
            <h2>{props.caption}</h2>
            <p>
                <Styled.HoverLink to={`/meals-cat/${props.path}`} url={props.path}>
                    See More
                </Styled.HoverLink>
            </p>
        </Styled.Caption>
    </Styled.HoverCard>
  )
}

export default HoverCard