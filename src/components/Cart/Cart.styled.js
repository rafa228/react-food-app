import styled from "styled-components";

const CartItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
    color: #69068a;
    border: 2px 2px solid #69068a;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
    border: 2px 2px s;
`;

const Actions = styled.div`
    text-align: right;

    & > button {
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #69068a;
        padding: 0.5rem 2rem;
        border-radius: 15px;
        margin-left: 1rem;
    }

    & > button:hover, & > button:active{
        background-color: #69068a;
        border-color: #69068a;
        color: #fff;
    }

    & > .button--alt{
        color: #69068a;
    }
`;

const LoadingOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > img {
        width: 200px;
        padding-left: 10%;
        background-size: contain;
    }

    & > p {
        color: #69068a;
        font-size: 1.3rem;
        text-align: center;
    }
`;

const OrderSuccess = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10%;
    align-items: center;
    flex-direction: column;

    & > img {
        width: 200px;
        height: 200px;
        background-size: contain;
    }

    & > p {
        color: #69068a;
        font-size: 1.3rem;
        text-align: center;
    }
`;

export { CartItems, Total, Actions, LoadingOrder, OrderSuccess};