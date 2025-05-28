import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import About from "./Pages/About";

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Router>
      <Footer />
    </>

  );
}

export default App;
