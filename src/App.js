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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
