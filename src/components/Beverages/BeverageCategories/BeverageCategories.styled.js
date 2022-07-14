import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: rgb(105, 6, 138);
    background: linear-gradient(
      90deg,
      rgba(105, 6, 138, 1) 0%,
      rgba(179, 69, 252, 1) 35%,
      rgba(225, 70, 252, 1) 100%
    );
    justify-content: center;
    gap: 5%;
    padding: 2rem 0;
    margin: 1rem 0;
    overflow: hidden;

    @media (max-width: 840px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5%;
      }
    }
  `;

  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > h2 {
      color: #8d10c7;
      text-shadow: 2px 2px rgb(218, 167, 232);
    }
  `;

  export { Container, Title }