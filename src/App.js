import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';
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
      <div className='App flex flex-col bg-black min-h-screen'>
        <Navbar
        title= "DEBSOC"
        links = {navLinks} />
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Main />} />
            <Route path="/Community" element={<div>HI</div>} />
            <Route path="/Curriculum" element={<div></div>} />
          </Routes>
        {/* </div> */}
        <Footer links={footerLinks} />
      </div>
    </Router>
  );
}

export default App;
