import styled from "styled-components";

export const FoodsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const FoodsTitle = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  font-family: var(--font-family);
  margin-right: 2rem;
`;
export const FoodsText = styled.p`
  max-width: 450px;
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;

  @media screen and (max-width: 780px) {
    padding: 1rem 0.8rem 1rem 0rem;
    max-width: 600px;
  }
`;

export const FoodsList = styled.div`
  display: grid;
  column-gap: 20px;

  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const FoodsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
export const FoodsImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const FoodsSectionHeading = styled.h3`
  padding: 0.5rem;
`;
export const FoodsDetail = styled.p`
  padding: 0.2rem;
  font-size: 0.8rem;
  max-width: 320px;

  @media screen and (max-width: 780px) {
    max-width: 350px;
  }
`;
export const FoodsPrice = styled.span`
  font-size: 1rem;
  color: rgb(178, 34, 34);
  font-weight: 600;
`;
