import React, { useState } from "react";
import * as Components from "./Components";
import Emoji from "react-emojis";
function App() {
  const [signIn, toggle] = React.useState(true);
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log(`Name: ${name},Email: ${email}, Password: ${password}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signIn={signIn}>
        <Components.Form onSubmit={handleSignup}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={signIn}>
        <Components.Overlay signIn={signIn}>
          <Components.LeftOverlayPanel signIn={signIn}>
            <Components.Title>
              Welcome Back!
              <Emoji emoji="smiling-face-with-halo" />
            </Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signIn={signIn}>
            <Components.Title>
              Hello, User!
              <Emoji emoji="handshake" />
            </Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
