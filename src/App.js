import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';
import Community from "./Community";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';

function App() {
  const navLinks = [
    {name: "Home", to: ""},
    {name: "Community", to: "Community"},
    {name: "Curriculum", to: "Curriculum"}
  ];

  const footerLinks = [
    {name: "About", to: ""},
    {name: "F.A.Q", to: "faqs"},
    {name: "Contact Us", to: "contact"}
  ];

  return (
    <Router>
      <div className='App flex flex-col bg-zinc-900 min-h-screen text-white'>
        <Navbar
        title= "DEBSOC"
        links = {navLinks} />
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Main />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Curriculum" element={<Curriculum />} />
            <Route path="/faqs" element={<div></div>} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        {/* </div> */}
        <Footer links={footerLinks} />
      </div>
    </Router>
  );
}

export default App;
