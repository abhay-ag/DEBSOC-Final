import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Community from "./components/Community";
import Curriculum from "./components/Curriculum";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Authentication from "./components/Authentication";
import FAQ from "./components/FAQs";

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

  const footerSocialLinks = [
    {icon: <i className="fab fa-facebook text-2xl"></i>, url: "https://m.facebook.com/chitkaradebsoc"},
    {icon: <i className="fab fa-instagram text-2xl"></i>, url: "https://www.instagram.com/debsoc_chitkara/"},
    {icon: <i className="fab fa-linkedin text-2xl"></i>, url: "https://in.linkedin.com/company/debsoc-cuiet"},
  ];

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className='App flex flex-col overflow-hidden bg-zinc-900 min-h-screen text-white'>
        <Navbar
        title= "DEBSOC"
        links = {navLinks} />
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Main />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Curriculum" element={<Curriculum />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/authentication" element={<Authentication />} />
          </Routes>
        {/* </div> */}
        <Footer footerLinks={footerLinks} footerSocialLinks={footerSocialLinks} />
      </div>
    </Router>
  );
}

export default App;
