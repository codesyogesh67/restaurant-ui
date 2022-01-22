import styled from "styled-components";

export const ServicesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 1rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ServicesTitle = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

export const ServicesBorderDesign = styled.div`
  width: 38px;
  height: 3px;
  margin-right: 10px;
  background: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.25rem;
`;
export const ServicesTitleH1 = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  font-family: var(--font-family);
`;

export const ServicesText = styled.p`
  max-width: 450px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;
  padding: 1rem 0.8rem 1rem 0rem;

  @media screen and (max-width: 780px) {
    padding: 1rem 0.8rem 1rem 0rem;
    max-width: 600px;
  }
`;

export const ServicesBody = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  row-gap: 10px;
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  padding-left: 0rem;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    padding: 0 1.5rem 1rem;
  }
`;

export const ServicesImageContainer = styled.div`
  height: 20vh;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ServicesSectionDetail = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 0.5rem 0 2rem;
`;
