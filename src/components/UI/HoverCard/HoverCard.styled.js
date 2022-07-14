import styled from "styled-components";
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 40;
  border-radius: 14px;
  padding-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  top: 0px;
  opacity: 0;
  transform: translate(100%);
  transition: all 0.25s ease;

  & > li {
    background: #fff;
    list-style: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.25s ease;
    backface-visibility: hidden;
  }

  & > li:last-child {
    border-radius: 0px 0px 12px 12px;
  }

  & > li:first-child {
    border-radius: 12px 12px 0px 0px;
  }

  & > li:hover {
    opacity: 1;
    transform: translate(-7px, -4px);
  }

  & > li > i {
    font-size: 1.4rem;
    color: #000;
  }
`;

const Caption = styled.div`
  z-index: 30;
  position: absolute;
  bottom: 0px;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 1.5rem;
    text-shadow: 2px 2px #69068a;
  }

  & > p {
    font-size: 0.8rem;
    opacity: 0;
    margin-bottom: -170px;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const HoverLink = styled(Link)`
    padding: 7px 17px;
    border-radius: 12px;
    background: #69068a;
    border: 2px solid #fff;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    transition: all .25s ease;
    font-family: inherit;
    font-size: .75rem;
    outline: none;
    text-decoration: none;

    &:hover {
        background: #fff;
        color: #69068a;
    }
`;

const HoverCard = styled.div`
  width: 67vh;
  height: 50vh;
  background: rgba(105, 6, 138, 1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backface-visibility: hidden;

  &:hover {
    transform: scale(0.9);
  }

  &:hover:after {
    height: 280px;
  }

  &:hover img {
    transform: scale(1.25);
  }

  &:hover ${Caption} > p {
    margin-bottom: 0px;
    opacity: 1;
  }

  &:hover ${Ul} {
    transform: translate(0);
    opacity: 1;
  }

  &:after {
    width: 100%;
    content: '';
    left: 0px;
    bottom: 0px;
    height: 150px;
    position: absolute;
    background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,1),100%);
    z-index: 20;
    transition: all .25s ease;
  }

  & > img {
    height: 100%;
    z-index: 10;
    transition: all .25s ease;
    position: absolute;
  }
`;

export { Ul, Caption, HoverLink, HoverCard }
