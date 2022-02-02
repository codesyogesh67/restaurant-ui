import styled from "styled-components";

export const TodaySpecialHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 1rem;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const TodaySpecialTitle = styled.div`
  margin-right: 2rem;
`;

export const TodaySpecialTitleP = styled.p`
  font-size: 0.8rem;
  line-height: 30px;
  letter-spacing: -0.04em;
`;
export const TodaySpecialText = styled.p`
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

export const TodaySpecialContainer = styled.div`
  padding: 3rem 1rem;
  padding-bottom: 0rem;
  display: grid;
  column-gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 20px;
`;

export const TodaySpecialBoxContainer = styled.div`
  max-width: 400px;
  position: relative;
`;

export const TodaySpecialImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const TodaySpecialBoxBody = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  color: white;
  padding: 0.5rem 0rem;
  color: white;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  @media screen and (min-width: 780px) {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1050px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const TodaySpecialBoxTitle = styled.h1`
  font-size: 1.1rem;

  @media screen and (min-width: 780px) {
    margin-top: 0.1rem;
  }

  @media screen and (min-width: 1050px) {
    margin-top: 0.2rem;
    font-size: 1.3rem;
  }
`;

export const TodaySpecialBoxText = styled.p`
  font-size: 0.8rem;
  padding: 0.3rem 1.3rem;

  @media screen and (min-width: 780px) {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
`;

export const TodaySpecialBoxPrice = styled.span`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 5px;

  @media screen and (min-width: 780px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  @media screen and (min-width: 1050px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

export const TodaySpecialBoxOrder = styled.button`
  border: none;
  padding: 5px;
  border-radius: 6px;

  @media screen and (min-width: 800px) {
    padding: 2px 5px;
    font-size: 0.8rem;
  }
`;
