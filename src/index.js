import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
import Routes from "./Routes";
require("dotenv").config();
ReactDom.render(<Routes />, document.getElementById("root"));
