import styled from 'styled-components';

export const theme = {
    primaryHover: '#343078',
    mobile: '576px',
  }

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(105, 6, 138);
  background: linear-gradient(
    90deg,
    rgba(105, 6, 138, 1) 0%,
    rgba(179, 69, 252, 1) 35%,
    rgba(225, 70, 252, 1) 100%
  );
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    /* display: flex;
    align-items: center; */
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-shadow: 2px 2px rgba(105, 6, 138, 1);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: rgba(179, 69, 252, 1) ;
    }

    & > p {
      padding-left: .8rem;
      padding-bottom: .3rem;
    }

    & > span > img {
      width: 2vw;
      height: 2vw;
    }
  }
`;

