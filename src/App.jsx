import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/LogIn";
import ProtectedRoute from "./components/ProtectedRoute";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ProtectedRoute> <Contact />  </ProtectedRoute>}/>
        <Route path="/create" element={<ProtectedRoute> <CreatePost /> </ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
