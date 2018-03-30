import React from "react";
import { render } from "react-dom";
import { MyButton, MyHeader } from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <MyHeader color="blue">Wow what a header</MyHeader>
      <MyButton color="brown">Wow what a button</MyButton>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
