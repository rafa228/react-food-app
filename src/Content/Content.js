import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { Link } from "react-router-dom";
import * as Styled from "./Content.styled";

const contents = [
  {
    id: "c1",
    name: "Finest fish and veggies",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
  },
  {
    id: "c2",
    name: "Fresh chocolate milktea with Hazelnut",
    image:
      "https://akcdn.detik.net.id/community/media/visual/2022/01/20/bubble-teafoto-thespruceeatscom.jpeg?w=620&q=90",
  },
  {
    id: "c3",
    name: "Vast cosmic arena",
    image:
      "https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80",
  },
];

const Content = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  // { key: "c1", content: <h2>c</h2> },
  // { key: "c2", content: <h2>a</h2>},
  // { key: "c3", content: <h2>b</h2>}

  var slides = [];

  const onClickHandler = () => {
    var a = 1;
    alert((a === 1 ) ? 'success' : 'error');
  };
  // if (a === 1){
  //   alert("success")
  // }
  // else {
  //   alert("error")
  // }  

  const onClickAlert = () => {
    const a = 1;
    let output;

    if (a === 1) {
      output = "sucess";
    } 
    alert(output);
  };

  contents.map((content, i) =>
    slides.push({
      key: i,
      content: (
        <Styled.ItemContainer key={content.id}>
          <Styled.CarouselItem>
            <Styled.CarouselButton onClick={() => setSelectedSlide(i)}>
              <img src={content.image} alt={content.id} />
            </Styled.CarouselButton>
          </Styled.CarouselItem>
          <Styled.CarouselItem>
            {selectedSlide === i ? <h2>{content.name}</h2> : null}
          </Styled.CarouselItem>
        </Styled.ItemContainer>
      ),
    })
  );
  // console.log(slides);

  return (
    <>
      <Styled.Banner>
        <h1>You Hungry?</h1>
        <article>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p>Yes I'm Hungry</p>
          </Link>
        </article>
      </Styled.Banner>
      <Styled.Content id="breweries">
        <ul style={{ listStyleType: "none" }}>
          {contents.map((content) => (
            <li key={content.id}>
              <figure>
                <img src={content.image} alt={content.id} />
                <figcaption>
                  <h3>{content.name}</h3>
                </figcaption>
              </figure>
              <Styled.LinkButton to="/">See More</Styled.LinkButton>
            </li>
          ))}
        </ul>
      </Styled.Content>
      <Styled.Content>
        <Styled.CarouselContainer>
          <h2>Carousel</h2>
          {/* <button onClick={onClickAlert}>test</button>
          <button onClick={onClickHandler}>test 1</button> */}
          {/* <Carousel slides={slides} goToSlide={2} /> */}
        </Styled.CarouselContainer>
      </Styled.Content>
    </>
  );
};

export default Content;
