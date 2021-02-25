import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from "./WebEditor/Editor";
import Footer from "./Footer";
import { useLocalStorage } from "../Hooks/LocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function LaunguageManager() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const htmlDefault = `<h2>Hello User</h2>`;

  const cssDefault = `body{
  text-align:center;
}`;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
        <body>${html}
        ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>`;

  useEffect(() => {
    setTimeout(() => {}, 500);
    updateHtmlStrorage(html);
    updateCssStrorage(css);
    updateJsStrorage(js);
  }, [html, css, js]);

  return (
    <div>
      <Container fluid={true} className="pane pane-top">
        <Row noGutters={true}>
          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-html5"> </i> Html
            </div>
            <Editor
              launguage="xml"
              value={html}
              onChange={(newVal) => {
                updateHtml(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-css3-alt"></i> Css
            </div>
            <Editor
              launguage="css"
              value={css}
              onChange={(newVal) => {
                updateCss(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-js-square"></i> Js
            </div>
            <Editor
              launguage="javascript"
              value={js}
              onChange={(newVal) => {
                updateJs(newVal);
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="pane pane-bottom">
        <Row noGutters={true}>
          <iframe
            srcDoc={srcDoc}
            className="output-pane"
            allowFullScreen
          ></iframe>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default LaunguageManager;
