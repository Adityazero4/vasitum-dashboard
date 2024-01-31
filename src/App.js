import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import MainBar from "./components/Global/MainBar";
import Navbar from "./components/Global/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <CssBaseline />
      <div className="app">
        <MainBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className="content">
          <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
