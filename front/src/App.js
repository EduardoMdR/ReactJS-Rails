import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { MainRoutes } from './routes'
import Header from "./components/Header"


function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <MainRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
