import React, { Component } from "react";

const MyButton = ({ children, color }) => (
  <button style={{ color }}>{children}</button>
);

export default MyButton;
