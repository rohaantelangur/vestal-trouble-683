import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/HeaderCom/Header";
import Footer from "./Components/FooterCom/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
