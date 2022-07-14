import React from "react";
import Card from "../../UI/Card/Card";
import * as Styled from "./AccountType.styled";

import profile from "../../../assets/profile.jpg";

const AccountType = () => {
  return (
    <>
      <Styled.TypeContainer>
        <Styled.TypeContent>
            <Card>
                <Styled.ProfileDetail>
                    <Styled.Badge>
                        <img src={profile} alt="profile" />
                    </Styled.Badge>
                    <Styled.BriefProfile>
                        <h2>Rafly M</h2>
                        <p>mrrafly27@gmail.com</p>
                        <p>+6281388997657</p>
                    </Styled.BriefProfile>
                </Styled.ProfileDetail>
                <Styled.CurrentBadge>
                  <h2>Current Badge</h2>
                </Styled.CurrentBadge>
                <Styled.TypeTracker>
                  <Styled.MyPointsContainer>
                    <Styled.PointsText>
                      <h2>Current Points</h2>
                    </Styled.PointsText>
                    <Styled.MyPoints>
                      <h2>30 <span>pts</span></h2>
                    </Styled.MyPoints>
                  </Styled.MyPointsContainer>
                  <Styled.PointsMapper>
                    <h2>Progress</h2>
                  </Styled.PointsMapper>
                </Styled.TypeTracker>
            </Card>
        </Styled.TypeContent>
      </Styled.TypeContainer>
    </>
  );
};

export default AccountType;
