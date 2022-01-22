import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const BannerContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 5rem;

  @media screen and (max-width: 1050px) {
    margin: 0 0 3rem;
  }
`;
export const BannerTitle = styled.h1`
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  line-spacing: -0.04em;

  @media screen and (max-width: 650px) {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const BannerText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-text);
  margin-top: 1.5rem;
`;
export const BannerButton = styled.button`
  width: 80%;
  min-height: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  background: #ff4820;
  border: 2px solid #ff4820;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 0;
  outline: none;
  margin: 2rem 0 1rem;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 490px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const BannerImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
