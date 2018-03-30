import React, { Component } from "react";

const MyHeader = ({ children, color }) => (
  <h1 style={{ color }}>{children}</h1>
);

export default MyHeader;
