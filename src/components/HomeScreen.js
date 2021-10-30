import React, { useState } from "react";
import { Container, Tabs, Tab, Form, Button } from "react-bootstrap";
import { Skeleton } from "@material-ui/lab";

import { login, getTopQuestions } from "../api/api";

const Loader = () => {
  return (
    <Container>
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
    </Container>
  );
};

export default function HomeScreen() {
  const [key, setKey] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [qList, setQList] = useState(null);

  return (
    <div>
      <Container
        style={{
          marginTop: 20,
        }}
      >
        {isLoggedIn ? (
          isLoading ? (
            <Loader />
          ) : (
            <h1>data</h1>
          )
        ) : (
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <Container
                style={{
                  marginTop: 10,
                }}
              >
                <h1>Login</h1>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    let didLogin = await login(email, password);
                    if (didLogin) {
                      setIsLoggedIn(true);
                    }
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required={true}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required={true}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Container>
            </Tab>
            <Tab eventKey="signup" title="Signup">
              <Container
                style={{
                  marginTop: 10,
                }}
              >
                <h1>Signup</h1>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required={true}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required={true}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={() => {}}>
                    Sign Up
                  </Button>
                </Form>
              </Container>
            </Tab>
          </Tabs>
        )}
      </Container>
    </div>
  );
}
