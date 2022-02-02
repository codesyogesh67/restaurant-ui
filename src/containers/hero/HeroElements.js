import styled from "styled-components";

export const HeroContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;
