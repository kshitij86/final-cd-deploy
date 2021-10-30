import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleButton from "react-google-button";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const code = `
  #include <iostream>

  /* 
    Welcome to CodePilot, start writing your code here!
    If you feel like it you can even connect with a peer and solve the problem together.
    Just click on the 'Find Peer' button to start a voice chat with another coder like yourself. 
  */

  int add (int a, int b){
    return a + b; 
  }

  int subtract (int a, int b){
    return a - b; 
  }

  int main (void){
    int a = 2, b = 3, c, d;
    
    c = add(a, b); 
    d = subtract(a, b); 
  }


`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { editor: false, code, loader: false };
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" className="justify-content-center">
          <Navbar.Brand
            style={{
              fontSize: 35,
            }}
          >
            codepilot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <>
          {!this.state.editor ? (
            <div>
              <div
                style={{
                  position: "relative",
                }}
              >
                <img
                  style={{
                    height: "20%",
                    width: "100%",
                    opacity: 0.2,
                  }}
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "5%",
                    right: "5%",
                    bottom: "75%",
                  }}
                >
                  <h1 style={{ color: "black", fontSize: 60 }}>
                    Prepare for coding interviews in a breeze
                  </h1>
                  <div
                    style={{
                      paddingTop: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GoogleButton
                      onClick={() => {
                        this.setState({ loader: true });
                        setTimeout(() => {
                          console.log("editor");
                          this.setState({ editor: true });
                        }, 2000);
                      }}
                    />

                    {this.state.loader ? (
                      <Loader
                        type="Rings"
                        color="black"
                        height={80}
                        width={80}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Code editor  */
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <p style={{ padding: 25 }}>
                  <h1>Minimum edit distance</h1>
                  <p>
                    Given two strings str1 and str2 and below operations that
                    can performed on str1.
                  </p>
                  <p>
                    Find minimum number of edits (operations) required to
                    convert ‘str1’ into ‘str2’.
                  </p>
                  <ol>
                    <li>Insert</li>
                    <li>Remove</li>
                    <li>Replace</li>
                  </ol>
                  <p>All of the above operations are of equal cost.</p>
                </p>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Editor
                    value={this.state.code}
                    onValueChange={(code) => this.setState({ code })}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    style={{
                      height: "50%",
                      width: "85%",
                      fontFamily: '"Fira code", "Fira Mono", monospace',
                      fontSize: 12,
                      color: "white",
                      backgroundColor: "black",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <Button style={{ marginLeft: "auto", marginRight: "auto" }}>
                    Run Code
                  </Button>
                  <Button
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    disabled
                  >
                    Find Peer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      </>
    );
  }
}
