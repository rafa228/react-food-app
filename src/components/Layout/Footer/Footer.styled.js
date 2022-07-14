import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-right: 1rem;
  flex: 4;
`;

const Link = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-left: 0.5rem;
`;

const IconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
`;

const Footer = styled.div`
  display: flex;
  text-shadow: #69068a;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  padding: 10px auto;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 2rem;
  flex: 1;
  text-decoration: none;

  @media (max-width: 840px){
    & {
        display: flex;
    }

    ${LinkContainer}{
        flex: 1;
    }

    ${Link}{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 2rem
    }

    ${IconContainer}{
        flex: 1;
    }
  }

  @media (max-width: 455px){
    & {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    ${LinkContainer} {
        flex: 1;
    }

    ${Link} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 2rem;
        /* border: 3px solid #fff */
    }
    ${IconContainer} {
        flex: 1;
        margin-left: 3rem;
    }
  }
`;


const LinkItem = styled.div`
  margin-right: 3rem;
  padding: 0 1rem;
`;

const SocialMedia = styled.div`
    margin-right: 2rem;
`;

const LinkText = styled.div`
    font-size: .8rem;
    color: #fff;
    text-decoration: none;

    & > img {
        width: 1.5rem;
        height: auto;
        background-size: contain;
    }
`;

export { Footer, LinkContainer, Link, LinkItem, IconContainer, SocialMedia, LinkText };