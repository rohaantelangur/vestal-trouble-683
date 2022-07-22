import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/HeaderCom/Header";
import Footer from "./Components/FooterCom/Footer";
import Products from "./Page/Products";

import { MainCartBag } from "./Components/CartCom/MainCartBag";
import { Signup } from "./Components/SignupCom/Signup";
import { Login } from "./Components/LoginCom/Login";
import { CheckOutPage } from "./Components/CheckOutCom/CheckOutPage";


function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mainCartBag" element={<MainCartBag />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      
    </>
  );
}

export default App;
