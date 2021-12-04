import React from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppRoute from "./Route/AppRoute";

function App() {
  return (
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
  );
}

export default App;
