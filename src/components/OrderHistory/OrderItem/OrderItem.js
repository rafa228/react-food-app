import React from 'react'
import * as Styled from './OrderItem.styled'

const OrderItem = () => {
  return (
    <>
      <Styled.Order>
          <div>
            <h3></h3>
            <Styled.Description></Styled.Description>
            <Styled.Amount></Styled.Amount>
          </div>
      </Styled.Order>
    </>
  )
}

export default OrderItem