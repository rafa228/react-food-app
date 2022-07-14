import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  

  @media(max-width: 769px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  border: 1px solid #aaa;
  width: 50%;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  margin: 10px;
  flex: 1;

  &:hover{
    background-color: rgba(179, 69, 252, 1) ;
    color: #fff;
  }

  @media (max-width: 769px){
    & {
      width: 60%;
    }
  }

  @media (max-width: 450px){
    & {
      width: 80%;
    }
  }

`;

const Header = styled.div`
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: stretch;

  &.img {
    width: 100%;
    max-width: 500px;
    background-size: contain;
  }

  @media(max-width: 769px){
    &.img {
      width: 100%;
      /* max-width: 600px; */
      background-size: contain;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  padding-bottom: 20px;

  p {
    font-size: 20px;
    text-shadow: 2px 2px #CAB8FF;
    color: #69068a;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  p:hover {
    color: #fff;
  }
`;

export { Container, Card, Header, Content};