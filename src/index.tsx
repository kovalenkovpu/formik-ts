import React from "react";
import { render } from "react-dom";

import "./styles.css";

import DemoForm from "./components/DemoForm";

const rootElement = document.getElementById("root");
render(<DemoForm initialUserName="Pavel" />, rootElement);
