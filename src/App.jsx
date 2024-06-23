import { useState } from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import './styles/styles.css'
import Header from "./components/Header"
import "./styles/header.css"
import Footer from "./components/Footer"
import "./styles/footer.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/UserSignUp"
import AddNewCustomer from "./pages/AddNewCustomer"
import TableCustumersList from './components/TableCustumersList'


function App() {
//<Route path="/customerslist" element= {<CustomersList />}/>
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/usersignup" element= {<SignUp />}/>
      <Route path="/addnewcustomer" element= {<AddNewCustomer />}/>
      <Route path="/tablecustomerslist" element= {<TableCustumersList />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
