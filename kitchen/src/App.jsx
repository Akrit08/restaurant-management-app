import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.scss";

import Header from 'home/Header'
import Footer from 'home/Footer'
import KitchenContent from "./KitchenContent";
import SafeComponent from "./SafeComponent";
import "./index.scss";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<KitchenContent />} />
        </Routes>
      </div>
      <SafeComponent>
        <Footer />
      </SafeComponent>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
