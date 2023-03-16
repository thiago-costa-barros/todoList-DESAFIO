import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./routes";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic"
import "./styles/main.css";
import "./styles/global.css";

function App() {
  const options = {
    timeout: 5000
  }
  return (
    <BrowserRouter>
      <Provider template={AlertTemplate} {...options}>
        <RoutesComponent />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
