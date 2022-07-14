import styled from "styled-components";

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  margin: 2rem 0;
  font-size: 0.9rem;
`;

const TypeContent = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
  flex: 1;
  padding: 1rem 0;
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

export const CurrentBadge = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin: 1rem 1rem;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
`;

const TypeTracker = styled.div`
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: row;
`;

const MyPointsContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 0 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-direction: column;
  /* border: 2px solid red; */
`;

const PointsText = styled.div`
  font-size: 1rem;
  color: rgba(105, 6, 138, 1);
  text-shadow: 2px 2px #fff;
  text-align: center;
  /* border: 2px solid red; */
`;

const MyPoints = styled.div`
  /* border: 2px solid red; */
  color: #fff;
  text-shadow: 2px 2px rgb(105, 6, 138);
  border-radius: 15px;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  text-align: center;

  & > h2 {
    font-size: 2.5rem
  }

  & > h2 > span {
    font-size: 1rem;
  }
`;

const PointsMapper = styled.div`
  flex: 3;
  
  & > h2 {
    font-size: 1.5rem;
    color: #fff
  }
`;

export {
  PointsText,
  MyPoints,
  MyPointsContainer,
  PointsMapper,
  BriefProfile,
  Badge,
  ProfileDetail,
  TypeContent,
  TypeContainer,
  TypeTracker,
};
