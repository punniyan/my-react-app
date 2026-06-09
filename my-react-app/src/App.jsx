import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import LeftSidebar from "./leftside";
import MainContent from "./maincontent";
import RightSidebar from "./rightside";
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <div className="content-layout">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;