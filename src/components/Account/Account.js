import React from "react";
// import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";

import * as Styled from "./Account.styled";

import profile from "../../assets/profile.jpg";
import edit_icon from "../../assets/edit.png";
import promos from "../../assets/discount.png";
import payment from "../../assets/credit-card.png";
import policy from "../../assets/shield.png";
import my_order from "../../assets/order.png";
import my_account from "../../assets/user.png";
import account_type from "../../assets/premium-quality.png";

const navbar = [
  {
    id: "n1",
    name: "My Order",
    link: "/account/myorders",
    image: `${my_order}`
  },
  {
    id: "n2",
    name: "Account Type",
    link: "/account/account-type",
    image: `${account_type}`
  },
  {
    id: "n3",
    name: "Promos",
    link: "/account/mypromos",
    image: `${promos}`
  },
  {
    id: "n4",
    name: "Payment Methods",
    link: "/account/mypayments",
    image: `${payment}`
  },
  {
    id: "n5",
    name: "Manage Account",
    link: "/account/account-type",
    image: `${my_account}`
  },
  {
    id: "n6",
    name: "Terms of Servicet",
    link: "/account/policy",
    image: `${policy}`
  }, 
];

const arrow = ">";

const Account = () => {
  return (
    <>
      <Styled.AccountContainer>
        <Styled.Profile>
          <Card>
            <Styled.ProfileName>
              <Styled.Badge>
                <img src={profile} alt="profile" />
                <p></p>
              </Styled.Badge>
              <Styled.BriefProfile>
                <h2>Rafly M</h2>
                <p>mrrafly77@gmail.com</p>
                <p>+6281388997656</p>
              </Styled.BriefProfile>
              <Styled.BriefAction>
                <Styled.EditLink to="/">
                  <img src={edit_icon} alt="edit" />
                </Styled.EditLink>
              </Styled.BriefAction>
            </Styled.ProfileName>
          </Card>
          <Card>
            <Styled.ActionsContainer>
              <div style={{ margin: "0" }}>
                <h3>Account Actions</h3>
              </div>
              {navbar.map((nav) => (
                <Styled.AccountSettings to={nav.link} key={nav.id}>
                  <Styled.IconContainer>
                    <img src={nav.image} alt={nav.id} />
                  </Styled.IconContainer>
                  <Styled.TextNav>
                    <span>{nav.name}</span>
                    <Styled.ArrowSpan>{arrow}</Styled.ArrowSpan>
                  </Styled.TextNav>
                </Styled.AccountSettings>
              ))}
            </Styled.ActionsContainer>
          </Card>
        </Styled.Profile>
      </Styled.AccountContainer>
    </>
  );
};

export default Account;
