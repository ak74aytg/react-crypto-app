import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import './components/Styles/style.css';
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinDetails/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
