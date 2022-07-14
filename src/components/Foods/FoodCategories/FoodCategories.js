import React from "react";
import HoverCard from "../../UI/HoverCard/HoverCard";
import * as Styled from './FoodCategories.styled';

const FoodCategories = (props) => {
  const foodsImg = [
    {
      id: "m1",
      type: "meals",
      img: "https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2021/02/10/bgrjpg-20210210102912.jpg",
      caption: "Fast Foods"
    },
    {
      id: "m2",
      type: "meals-healthy",
      img: "https://images.indianexpress.com/2022/01/feature-healthy-food-e1646050285767.jpg",
      caption: "Healthy Foods"
    },
  ];

  const hoverList = foodsImg.map((food) => (
    <HoverCard key={food.id} image={food.img} caption={food.caption} path={food.type} id={food.id}/>
  ))

  return (
    <>
    <div style={{overflow: "hidden"}}>
      <Styled.Title>
        <h2>Foods Category</h2>
      </Styled.Title>
      <Styled.Container>
        <div>
          {hoverList[0]}
        </div>
        <div>
            {hoverList[1]}
        </div>
      </Styled.Container>
    </div>
    </>
  );
};

export default FoodCategories;
