import React from "react";
import { GlobalStyle } from './styles/global.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { MainRoutes } from './routes'
import Header from "./components/Header"
import Footer from "./components/Footer"
import UserProvider from "./hooks/useUserContext";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <UserProvider>
          <Header />
          <MainRoutes />
          <Footer />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
