import styled from "styled-components";
import { Link } from "react-router-dom";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  margin: 2rem 0;
  /* border: 2px solid red; */
  font-size: 0.9rem;
`;

const Profile = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
`;

const ActionsContainer = styled.div`
  padding: 0 1rem;
`;

const AccountInfo = styled.div`
  display: flex;
  width: 600px;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 1rem;
  /* border: 2px solid red; */
`;

const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
  flex: 1;
  padding: 1rem 0;
  /* margin-top: 1rem;
  margin-bottom: 1rem; */
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
`;

const Badge = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* border: 2px solid red; */

  & > img {
    width: 5vw;
    height: 5vw;
    border-radius: 100%;
  }
`;

const BriefProfile = styled.div`
  flex: 3;
  /* border: 2px solid red; */

  & > h2 {
    margin: 0;
    font-size: 2vw;
    color: #fff;
    text-shadow: 2px 2px rgba(105, 6, 138, 1);
  }

  & > p {
    margin: 0;
    color: #fff;
    font-size: 1vw;
  }
`;

const BriefAction = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* border: 2px solid red; */
`;

const EditLink = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  padding: 0.2rem 0.2rem;
  & > img {
    width: 2vw;
    height: 2vw;
  }

  &:hover {
    background-color: #fff;
  }
`;

const AccountSettings = styled(Link)`
 /* border: 2px solid red; */
  /* all: unset;
  cursor: pointer; */
  text-decoration: none;
  border-radius: 5px;
  background: #fff;
  margin: .5rem 0;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: .5rem .5rem;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); */

  &:hover {
    background: rgb(105, 6, 138);
    background: linear-gradient(
        90deg,
        rgba(105, 6, 138, 1) 0%,
        rgba(179, 69, 252, 1) 35%,
        rgba(225, 70, 252, 1) 100%
    );
    color: #fff;
  }

  & > img {
    width: 2vw;
    height: 2vw;
  }

  & > span {
    padding-left: 5px;
  }
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    /* border: 2px solid red; */

    & > img {
        width: 2vw;
        height: 2vw; 
    }
`;

const ArrowSpan = styled.span`
    /* flex: 1; */
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const TextNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 15;
    /* border-bottom: 1px solid #000; */
    /* border: 2px solid red; */

    & > span {
        flex: 10;
        font-size: 1vw;
    }

    & > ${ArrowSpan}{
        flex:1 ;
        justify-content: center;
    }

    & > img {
        flex: 1;
        width: 1.7vw;
        height: 2vw;
        /* border: 2px solid red; */
  }

  @media (max-width: 600px){

  }
`;


export {
  AccountContainer,
  Profile,
  AccountInfo,
  ProfileName,
  Badge,
  BriefProfile,
  BriefAction,
  EditLink,
  AccountSettings,
  IconContainer,
  TextNav,
  ArrowSpan,
  ActionsContainer
};
