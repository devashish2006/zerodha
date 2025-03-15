import React, { useState } from "react";
import Dashboard from "./Dashboard.js";
import TopBar from "./TopBar.js";
import BeforeHome from "./BeforeHome.jsx";

const Home = () => {
  const [user, setUser] = useState(null); // State to manage authenticated user

 console.log("ashish")
  return (
    <>
      <BeforeHome />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
