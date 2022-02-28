import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "./../../firebase";
import firebase from "firebase/app";

import {
  Container,
  LeftSide,
  RightSide,
  LeftWrraper,
  RightWrraper,
  SignInForm,
} from "./Login.Styled";

function Login() {
  return (
    <Container>
      <LeftSide>
        <LeftWrraper>
          <h1>
            Welcome To <span style={{ color: "#1effbc" }}>UniChat</span>
          </h1>
          <p>
            The best chat App on the web
            <br />
            Have fun!
          </p>
        </LeftWrraper>
      </LeftSide>
      <RightSide>
        <RightWrraper>
          <h1> Sign In</h1>
          <SignInForm>
            <div
              className="login-button google"
              style={{ width: "15vw" }}
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              }
            >
              <GoogleOutlined /> Sign In With Google
            </div>
            <div
              className="login-button facebook"
              style={{ width: "15vw" }}
              onClick={() =>
                auth.signInWithRedirect(
                  new firebase.auth.FacebookAuthProvider()
                )
              }
            >
              <FacebookOutlined /> Sign In With Facebook
            </div>
          </SignInForm>
        </RightWrraper>
      </RightSide>
    </Container>
  );
}

export default Login;
