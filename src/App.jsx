import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/styles.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CustomerList from "./pages/CustomerList";
import AddNewCustomer from "./pages/AddNewCustomer";
import Lobi from "./pages/Lobi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/AddNewCustomer" element={<AddNewCustomer />} />
        <Route path="/Lobi" element={<Lobi />} />
        <Route path="/customerlist" element={<CustomerList />} />
      </Routes>
      {/*  <Footer /> */}
    </>
  );
}

export default App;
