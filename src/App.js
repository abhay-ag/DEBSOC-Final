import ContactUs from './Contact';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import Section1 from './Section1';
import './style.css';

function App() {
  return (
    <div>
      <Navbar
      title= "DEBSOC"
      links = {["Home", "Community", "Curriculum"]} 
      />
      <Main />
      <Section1 />
      <Footer />
      <ContactUs />
    </div>
  );
}

export default App;
