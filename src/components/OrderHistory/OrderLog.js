import React, { useEffect } from "react";
import Card from "../UI/Card/Card";
// import OrderItem from "./OrderItem/OrderItem";
import * as Styled from "./OrderLog.styled";

const OrderLog = () => {
  // const [orderLog, setOrderLog] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [httpError, setHttpError] = useState();

  // const BASE_URL = `https://react-foodapp-c8cbb-default-rtdb.firebaseio.com/orders.json`;

  useEffect(() => {
    document.title = `MEALS APP | Order History`;
  }, []);

  // if (isLoading) {
  //   return (
  //       <Styled.LoadOrders>
  //           <p>Loading...</p>
  //       </Styled.LoadOrders>
  //   );
  // }

  // if (httpError) {
  //   return (
  //       <Styled.ErrorLoad>
  //           <p>{httpError}</p>
  //       </Styled.ErrorLoad>
  //   );
  // }

  // const orderLogList = orderLog.map((log) => (
  //       <OrderItem
  //           key={log.id}
  //           id={log.id}
  //           name={log.name}
  //           amount={log.amount}
  //           image={log.image}
  //       />
  // ));

  return (
    <Styled.Orders>
      <h1>Your Order Logs</h1>
      <Card>
        {/* {orderLogList.map((list) => (
            <ul>{list}</ul>
        ))} */}
      </Card>
    </Styled.Orders>
  );
};

export default OrderLog;
