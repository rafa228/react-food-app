import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Footer.styled";

//media
import fb from "../../../assets/fb.png";
import ig from "../../../assets/ig.png";
import tweet from "../../../assets/tweet.png";

const Footer = () => {
  return (
    <footer>
      <Styled.Footer>
        {/* Links */}
        <Styled.LinkContainer>
          <Styled.Link>
            <Styled.LinkItem>
              <div>
                <h3>Our Outlets</h3>
              </div>
              <ul style={{ padding: "0px", listStyleType: "none" }}>
                <li>
                  <Link to="/">
                    <Styled.LinkText>Semarang</Styled.LinkText>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Styled.LinkText>Jakarta</Styled.LinkText>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Styled.LinkText>Yogyakarta</Styled.LinkText>
                  </Link>
                </li>
              </ul>
            </Styled.LinkItem>
            <Styled.LinkItem>
              <div>
                <h3>Information</h3>
              </div>
              <Link to="/">
                <Styled.LinkText>Menu</Styled.LinkText>
              </Link>
              <Link to="/">
                <Styled.LinkText>Delivery Terms & Conditions</Styled.LinkText>
              </Link>
            </Styled.LinkItem>
            <Styled.LinkItem>
              <div>
                <h3>Contact Us</h3>
              </div>
              <Link to="/home">
                <Styled.LinkText>admin@westernmeals.com</Styled.LinkText>
              </Link>
              <Link to="/home">
                <Styled.LinkText>021 998 382</Styled.LinkText>
              </Link>
            </Styled.LinkItem>
          </Styled.Link>
        </Styled.LinkContainer>
        {/* Icons */}
        <Styled.IconContainer>
          <Styled.SocialMedia>
            <div>
              <div>
                <h3>Social Media</h3>
              </div>
              <div>
                <Link to="/home">
                  <Styled.LinkText>
                    <img src={fb} alt="fb" />
                  </Styled.LinkText>
                </Link>
                <Link to="/home">
                  <Styled.LinkText>
                    <img src={ig} alt="ig" />
                  </Styled.LinkText>
                </Link>
                <Link to="/home">
                  <Styled.LinkText>
                    <img src={tweet} alt="tweet" />
                  </Styled.LinkText>
                </Link>
              </div>
            </div>
          </Styled.SocialMedia>
        </Styled.IconContainer>
      </Styled.Footer>
    </footer>
  );
};

export default Footer;
