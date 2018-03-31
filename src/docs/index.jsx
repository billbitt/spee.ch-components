import React from "react";
import { render } from "react-dom";
import { Logo, NavBar } from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the components</h1>
      <h2>Logo...</h2>
      <Logo />
      <h2>NavBar..</h2>
      <NavBar />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
