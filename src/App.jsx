import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="text-black font-sora">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
