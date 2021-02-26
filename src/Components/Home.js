import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sh1 from "../Assets/shape-1.svg";
import sh2 from "../Assets/shape-2.svg";
import sh3 from "../Assets/shape-3.svg";
import sh6 from "../Assets/shape-6.svg";
import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "90px",
    position: "absolute",
  };

  const shape2 = {
    right: "380px",
    top: "280px",
    position: "absolute",
  };

  const shape3 = {
    right: "88px",
    top: "230px",
    position: "absolute",
  };

  const shape6 = {
    right: "272px",
    bottom: "0px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div>
      <Container style={wrapper}>
        <img src={sh1} alt="fig1" style={shape1} className="shape" />
        <img src={sh2} alt="fig2" style={shape2} className="shape" />
        <img src={sh3} alt="fig3" style={shape3} className="shape" />
        <img src={sh6} alt="fig6" style={shape6} className="shape" />
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Code Websites From Any Where</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              With this online code editor, you can edit HTML, CSS and
              JavaScript code, and live preview of site instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Web Editor
            </Button>

            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
              Generate README in Seconds
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              Online markdown editor, with custom toolbar to help you make your
              readme easily.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
