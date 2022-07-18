import styled from "styled-components";
import { Link } from 'react-router-dom';

const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Cart = styled.div`
  flex: 1;
  justify-content: center;
`;

const Navigation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NormalLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    text-shadow:2px 2px #69068a;
    font-size: 15px;
`;

const AuthLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    text-shadow:2px 2px #69068a;
    font-size: 15px;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
`;

const LogoText = styled.h1`
      color: #fff;
      text-shadow: 2px 2px #69068a;
      font-size: 1.5rem;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  color: #fff;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 4% 1%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 99;

  @media (max-width: 769px){
    ${Cart}{
      margin-right: 3rem;
    }

    ${Navigation}{
      display: flex;
      justify-content: flex-end;
      margin-right: 2rem;
    }

    ${NormalLinks} {
      display: none;
    }

    ${LogoText}{
      font-size: 0.8rem;
    }

    ${AuthLink}{
      font-size: 0.8rem;
      padding-right: 2rem;
    }
  }

  @media (max-width: 600px){
    ${Logo}{
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }

    ${NormalLinks}{
      display: none;
    }

    ${LogoText}{
      font-size: 0.6rem;
      padding-right: 5px;
    }

    ${Cart}{
      margin-right: .3rem;
      flex: 1;
    }

    ${Navigation}{
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin-right: 2rem;
    }

    ${AuthLink}{
      font-size: .8rem;
    }
  }
`;

export { Header, Logo, Cart, Navigation, NormalLinks, AuthLink, LogoLink, LogoText };