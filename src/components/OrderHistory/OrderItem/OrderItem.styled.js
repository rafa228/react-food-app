import styled from "styled-components";

const Order = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;

  &.h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Amount = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #69068a;
  font-size: 1.25rem;
`;

export { Amount, Description, Order };
