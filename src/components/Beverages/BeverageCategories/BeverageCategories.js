import React from "react";
// import Card from "../UI/Card";
import * as Styled from './BeverageCategories.styled';
import HoverCard from "../../UI/HoverCard/HoverCard";

const BeverageCategories = (props) => {
  const drinksImg = [
    {
      id: "1",
      type: "drinks",
      img: "https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2021/05/20210519164631-60a4de7763acc-strawberrymilkshake.jpg",
      caption: "Non Coffee",
    },
    {
      id: "2",
      type: "drinks-coffee",
      img: "https://akcdn.detik.net.id/community/media/visual/2022/01/20/bubble-teafoto-thespruceeatscom.jpeg?w=620&q=90",
      caption: "Coffee",
    },
  ];

  const hoverList = drinksImg.map((drink) => (
    <HoverCard
      key={drink.id}
      image={drink.img}
      caption={drink.caption}
      path={drink.type}
      id={drink.id}
    />
  ));

  return (
    <>
      <Styled.Title>
        <h2>Beverages Category</h2>
      </Styled.Title>
      <Styled.Container>
        <div>{hoverList[0]}</div>
        <div>{hoverList[1]}</div>
      </Styled.Container>
    </>
  );
};

export default BeverageCategories;
