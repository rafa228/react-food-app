import React from "react";
import * as Styled from "./Orders.styled";
import Card from "../../UI/Card/Card";

const orders = [
  {
    id: "o1",
    name: "Sushi",
    category: "Food",
    amount: 3,
    date: "June 6, 2022",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
  },
  {
    id: "o2",
    name: "Strawberry Milkshake",
    category: "Beverage",
    amount: 1,
    date: "June 6, 2022",
    image:
      "https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2021/05/20210519164631-60a4de7763acc-strawberrymilkshake.jpg",
  },
  {
    id: "o3",
    name: "Strawberry Milkshake",
    category: "Beverage",
    amount: 2,
    date: "June 5, 2022",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
  },
  {
    id: "o4",
    name: "Strawberry Milkshake",
    category: "Beverage",
    amount: 2,
    date: "June 5, 2022",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
  },
  {
    id: "o5",
    name: "Hazelnut Chocolate Milktea",
    category: "Beverage",
    amount: 2,
    date: "June 3, 2022",
    image:
      "https://akcdn.detik.net.id/community/media/visual/2022/01/20/bubble-teafoto-thespruceeatscom.jpeg?w=620&q=90",
  },
];

console.log(orders);

const Orders = () => {
  return (
    <>
      <Styled.OrdersContainer>
        <h2>Your Orders History</h2>
        {orders.map((order) => (
        <Card key={order.id}>
          <Styled.Orders>
            <Styled.OrdersImg
              src={order.image}
              alt={order.name}
            />
            <Styled.OrderDescription>
              <h2>{order.name}</h2>
              <p>{`Amount : ${order.amount}`}</p>
              <p>{order.date}</p>
              <Styled.OrderBadge>{order.category}</Styled.OrderBadge>
            </Styled.OrderDescription>
          </Styled.Orders>
        </Card>
        ))}
      </Styled.OrdersContainer>
    </>
  );
};

export default Orders;
