import { Fragment, useContext, useState, useRef } from "react";
import FocusLock from "react-focus-lock";

import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerNav from "../BurgerNav/BurgerNav";
import AuthContext from "../../../store/auth-context";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import { useOnClickOutside } from "../../../hooks/use-burger";
import * as Styled from "./Header.styled";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  useOnClickOutside(node, () => setOpen(false));

  const logoutHandler = () => {
    authCtx.logout();
  };

  const MobileNav = (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <BurgerButton open={open} setOpen={setOpen} aria-controls={menuId} />
        <BurgerNav open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  );

  return (
    <Fragment>
      <Styled.Header>
        <Styled.Logo>
          <Styled.LogoLink to="/">
            <Styled.LogoText>Western Meals</Styled.LogoText>
          </Styled.LogoLink>
        </Styled.Logo>
        <Styled.Cart>
          {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
        </Styled.Cart>
        <Styled.Navigation>
          {isLoggedIn && (
            <Styled.NormalLinks to="/order-history">
              Order History
            </Styled.NormalLinks>
          )}
          {isLoggedIn && (
            <Styled.NormalLinks to="/account">
              Account
            </Styled.NormalLinks>
          )}
          {!isLoggedIn && (
            <Styled.AuthLink to="/login">
              Login
            </Styled.AuthLink>
          )}
          {isLoggedIn && (
            <Styled.AuthLink to="/" onClick={logoutHandler}>
              Logout
            </Styled.AuthLink>
          )}
          {isLoggedIn && MobileNav}
        </Styled.Navigation>
      </Styled.Header>
    </Fragment>
  );
};

export default Header;
