import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/HeaderCom/Header";
import Footer from "./Components/FooterCom/Footer";
import Products from "./Page/Products";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
