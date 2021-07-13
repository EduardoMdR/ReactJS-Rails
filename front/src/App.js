import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { MainRoutes } from './routes'
import Header from "./components/Header"
import UserProvider from "./hooks/useUserContext";


function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <MainRoutes />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
