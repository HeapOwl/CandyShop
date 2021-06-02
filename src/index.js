import React from "react";
import ReactDom from "react-dom";
import Routes from "./Routes";
require("dotenv").config();
ReactDom.render(<Routes />, document.getElementById("root"));
