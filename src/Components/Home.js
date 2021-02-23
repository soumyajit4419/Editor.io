import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sh1 from "../Assets/shape-1.svg";
import sh2 from "../Assets/shape-2.svg";
import sh3 from "../Assets/shape-3.svg";
import sh4 from "../Assets/shape-4.svg";
import sh5 from "../Assets/shape-5.svg";
import sh6 from "../Assets/shape-6.svg";
import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom";

function Home() {
  const wrapper = {
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#312b3f",
  };
  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "120px",
    position: "absolute",
  };

  const shape2 = {
    right: "380px",
    top: "95px",
    position: "absolute",
  };

  const shape3 = {
    right: "88px",
    top: "230px",
    position: "absolute",
  };

  const shape4 = {
    right: "295px",
    top: "550px",
    position: "absolute",
  };

  const shape5 = {
    right: "-48px",
    bottom: "250px",
    position: "absolute",
  };

  const shape6 = {
    right: "272px",
    bottom: "-20px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div style={wrapper}>
      <img src={sh1} alt="fig1" style={shape1} className="shape" />
      <img src={sh2} alt="fig2" style={shape2} className="shape" />
      <img src={sh3} alt="fig3" style={shape3} className="shape" />
      <img src={sh4} alt="fig4" style={shape4} className="shape" />
      <img src={sh5} alt="fig5" style={shape5} className="shape" />
      <img src={sh6} alt="fig6" style={shape6} className="shape" />

      <Container>
        <Row className="text-center" style={{ alignItems: "center" }}>
          <Col md={6}>
            <img src={homeImg} className="img-fluid" alt="main img" />
          </Col>
          <Col>
            <h2 style={{ color: "#f0c19e" }}>Code Websites From Any Where</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "15px",
              }}
            >
              With this online code editor, you can edit HTML, CSS and
              JavaScript code, and view the result instantly in your browser.
            </h5>
            <br />
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Open Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
