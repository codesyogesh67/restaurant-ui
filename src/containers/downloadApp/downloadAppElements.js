import styled from "styled-components";

export const DownloadAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const DownloadAppHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 780px) {
  }
`;

export const DownloadAppTitle = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  font-family: var(--font-family);
  margin-right: 2rem;
  padding-bottom: 1.5rem;
`;
export const DownloadAppText = styled.p`
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin-right: 2rem;
`;

export const DownloadAppImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const DownloadAppImageWrapper = styled.div`
  position: relative;

  img:nth-child(2) {
    position: absolute;
    top: 0;
    right: 10vw;
    z-index: -1;
  }

  @media screen and (min-width: 1050px) {
    img:nth-child(1) {
      left: 6vw;
    }
  }
`;
