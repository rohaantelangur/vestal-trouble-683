import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/HeaderCom/Header";
import Footer from "./Components/FooterCom/Footer";
import { MainCartBag } from "./Components/CartCom/MainCartBag";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainCartBag" element={<MainCartBag />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
