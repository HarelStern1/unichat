import styled from "styled-components";
import background from "./../../images/background.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #d8e4e0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
`;

export const LeftSide = styled.div`
  height: 100vh;
  width: 50vw;
  font-weight: bold;
  background: url(${background});
  opacity: 0.8;
  background-size: 65vw 100vh;
  background-repeat: no-repeat;
  color: #fff;
`;

export const LeftWrraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 2vw;
  margin-right: 2vw;

  h1 {
    text-align: left;
    font-size: 40px;
  }

  p {
    text-align: left;
    font-size: 19px;
  }
`;

export const RightSide = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: white;
  font-weight: bold;
`;

export const RightWrraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-left: 2vw;
  margin-right: 2vw;
  height: fit-content;
  gap: 40px;

  h1 {
    text-align: center;
    font-size: 40px;
  }

  p {
    text-align: left;
    font-size: 19px;
  }
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
