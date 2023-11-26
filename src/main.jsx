import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
