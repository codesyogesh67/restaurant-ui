import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 6rem;

  @media only screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

export const BorderDesign = styled.div`
  width: 38px;
  height: 3px;
  margin-right: 10px;
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.25rem;
`;

export const TitleH1 = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  font-family: var(--font-family);
`;
