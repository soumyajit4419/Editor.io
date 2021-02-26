import React from "react";
import Button from "react-bootstrap/Button";
import "@github/markdown-toolbar-element";

function Toolbar(props) {
  const btnStyle = {
    padding: "3px 10px",
    fontSize: "12px",
    lineHeight: "20px",
    margin: "3px",
  };

  return (
    <div>
      <markdown-toolbar for="textarea_input">
        <md-header level="1">
          <Button style={btnStyle} variant="info">
            <i className="fas fa-heading"></i>
          </Button>
        </md-header>

        <md-bold>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-bold"></i>
          </Button>
        </md-bold>

        <md-italic>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-italic"></i>
          </Button>
        </md-italic>

        <md-quote>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-quote-right"></i>
          </Button>
        </md-quote>

        <md-code>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-code"></i>
          </Button>
        </md-code>

        <md-link>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-link"></i>
          </Button>
        </md-link>

        <md-image>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-image"></i>
          </Button>
        </md-image>

        <md-unordered-list>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-list-ul"></i>
          </Button>
        </md-unordered-list>

        <md-ordered-list>
          <Button style={btnStyle} variant="info">
            <i className="fas fa-list-ol"></i>
          </Button>
        </md-ordered-list>

        <Button style={btnStyle} variant="info" onClick={props.clickHandler}>
          <i className="fas fa-file-download"></i>
        </Button>
      </markdown-toolbar>
    </div>
  );
}

export default Toolbar;
