import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.div`
  background: url("https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536")
    center;
  background-size: cover;
  padding: 4rem 2rem;
  z-index: 0;
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;

  & > * {
    color: #fff;
  }

  & > h1 {
    font-size: 7vh;
    padding-bottom: 1rem;
    text-shadow: 2px 2px #8d10c7;
  }

  & > article > p {
    /* font-size: 1.5rem; */
    font-size: 4vh;
    font-weight: 200;
    text-shadow: 2px 2px #8d10c7;
  }

  & > article > a {
    margin-top: 0.75rem;
    text-decoration: none;
    color: #fff;
    text-shadow: 2px 2px #8d10c7;
  }

  @media (max-width: 543px) {
    & > h1 {
      font-size: 6vh;
    }

    & > article > p {
      font-size: 2vh;
    }
  }
`;

const Content = styled.section`
  padding: 2rem;

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  & > ul > li {
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    /* border: 2px solid red; */
  }

  & > ul > li > figure {
    max-height: 220px;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;
  }

  & > ul > li > figure > img {
    background-size: cover;
    width: 100%;
    max-width: 300px;
    max-height: 200px;
    /* height: 100%; */
  }

  & > ul > li > figure > figcaption {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  & > ul > li > figure > figcaption > h3 {
    color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    text-shadow: 2px 2px #8d10c7;
  }

  & > ul > li > a {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    text-decoration: none;
    color: #8d10c7;
  }

  @media (max-width: 760px) {
    & > ul > li > figure {
      max-width: 600px;
      position: relative;
      /* border: 2px solid red; */
    }
    & > ul > li > figure > img {
      background-size: cover;
      width: 100%;
      max-width: 120vh;
      max-height: 200px;
      /* height: 100%; */
    }
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  color: #fff;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  border-radius: 10px;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  text-decoration: none;
  /* & > p {
    text-align: center;
    color: #fff;
    height: .7rem;
  } */
`;

const CarouselContainer = styled.div`
  /* height: 25rem;
  width: 20rem; */
  /* margin-left: 15rem;
  margin-right: 20rem; */
  margin: 20rem 15rem;
  text-align: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CarouselButton = styled.button`
  &:hover {
    background-color: transparent;
  }

  & > img {
    height: 23rem;
    width: 17rem;
    background-color: #fff;
    border-radius: 20;
  }
`;

const CarouselItem = styled.div`
  & > h2 {
    font-size: 1.5rem;
  }
`;

export { CarouselItem, Banner, Content, LinkButton, CarouselContainer, CarouselButton, ItemContainer };
