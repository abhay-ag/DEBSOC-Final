import ContactUs from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Curriculum from "./Curriculum";
import Community from "./Community";

function App() {
  return (
    <Router>
      <Navbar
      title= "DEBSOC"
      links = {["Home", "Community", "Curriculum"]} 
      />
      <Routes>
        <Route path="/" element = {<>
          <Main />
          <Section1 />
        </>}/>
        <Route path="/contact" element= {
          <ContactUs />
        }/>
        <Route path="/curriculum" element = {<Curriculum />}/>
        <Route path="/community" element = {<Community />} />
        <Route path="/about-us" element = {<div className="font-bold text-white flex w-screen h-screen text-6xl items-center justify-center">UNDER CONSTRUCTION</div>} />
        <Route path="/apply" element = {<div className="font-bold text-white flex w-screen h-screen text-6xl items-center justify-center">UNDER CONSTRUCTION</div>} />
        <Route path="/login" element = {<div className="font-bold text-white flex w-screen h-screen text-6xl items-center justify-center">UNDER CONSTRUCTION</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
