import styled from "styled-components";
// import { Link } from "react-router-dom";

const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    margin: 2rem 0;
    /* border: 2px solid red; */
    background: rgb(105, 6, 138);
    background: linear-gradient(
        90deg,
        rgba(105, 6, 138, 1) 0%,
        rgba(179, 69, 252, 1) 35%,
        rgba(225, 70, 252, 1) 100%
    );

    & > h2 {
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px rgba(105, 6, 138, 1);
  }
`;

const Orders = styled.div`
    /* border: 2px solid red; */
    width: 70vw;
    display: flex;
    margin: 1rem 1rem;
    /* flex: 1; */
    flex-direction: row;
`;

export const OrdersImg = styled.img`
    width: 5px;
    height: 80%;
    border-radius: 5px;
    flex:1;
    /* border: 2px solid red; */
`;

export const OrderDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    flex: 4;
    /* border: 2px solid red; */

    & > h2 {
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }

    & > p {
        text-decoration: none;
        font-size: .7rem;
        margin: 0;
        padding: 0;
    }
`;

const OrderBadge = styled.span`
    padding: .5rem .5rem;
    width: fit-content;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    text-shadow: 2px 2px rgb(105, 6, 138);
    font-size: .7rem;
    background: rgb(105, 6, 138);
    background: linear-gradient(
        90deg,
        rgba(105, 6, 138, 1) 0%,
        rgba(179, 69, 252, 1) 35%,
        rgba(225, 70, 252, 1) 100%
    );
`;

export { OrdersContainer, Orders, OrderBadge };