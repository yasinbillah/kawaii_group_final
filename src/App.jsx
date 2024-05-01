// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";  // Assuming you'll create Home.jsx in ./Pages/Home
import About from "./Pages/About/About";  // Assuming you'll create Home.jsx in ./Pages/Home
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Ssw from "./Pages/japanSsw/japanSsw";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import CareerForm from "./Pages/CareerForm/CareerForm";
import News from "./Pages/News/News";
import Construction from "./Pages/Construction/Construction";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/japan-world-ssw-training-center-ltd" element={<Ssw />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<CareerForm />} />
        <Route path="/news" element={<News />} />
        <Route path="/kawaii-construction" element={<Construction />} />
        {/* Additional routes for other pages can be added here */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
