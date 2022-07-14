import styled from 'styled-components';

export const theme = {
    primaryDark: '#69068a',
    primaryLight: '#000',
    primaryHover: '#343078',
    mobile: '576px',
  }

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  top: 33%;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    border: 2px solid rgba(179, 69, 252, 1);
    border-bottom-color:  rgba(105, 6, 138, 1);
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media(max-width: 840px){
    span {
      width: 2rem;
    }
  }
`;
