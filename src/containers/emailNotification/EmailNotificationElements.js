import styled from "styled-components";

export const EmailNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailNotificationBody = styled.div`
  height: 25vh;
`;
export const EmailNotificationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const EmailNotificationTitle = styled.h1`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 40px;
  font-family: var(--font-family);
  padding-bottom: 0.5rem;
`;
export const EmailNotificationText = styled.p`
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin: 0 1rem;
  max-width: 450px;
`;
export const EmailNotificationForm = styled.div`
  margin-bottom: 2rem;

  width: 50%;
  display: flex;
  justify-content: center;

  input {
    flex: 2;
    border: none;
    padding: 0.8rem;
    background: rgb(236, 233, 232);
    border-radius: 5px;
    max-width: 300px;
  }
  input:focus {
    outline: none;
  }
  button {
    flex: 0.5;
    border: none;
    padding: 0.3rem;
    font-size: 1.2rem;
    background: rgb(103, 183, 33);
    color: rgb(236, 233, 232);
    border-radius: 5px;
    cursor: pointer;
    min-width: 50px;
    max-width: 100px;
  }
`;
export const EmailNotificationLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  color: rgb(141, 141, 136);
  font-size: 0.9rem;
  padding-bottom: 1rem;
`;
export const EmailNotificationIcons = styled.div`
  color: rgb(141, 141, 136);
  font-size: 0.8rem;
`;
