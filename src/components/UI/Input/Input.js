import React from 'react';

import * as Styled from './Input.styled';

const Input = React.forwardRef((props, ref) => {
  return (
    <Styled.Input>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Styled.Input>
  );
});

export default Input;
