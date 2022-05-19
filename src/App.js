import Main from './Main';
import Maincard from './Maincard';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section5 from './Section5';
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
      <Section5 />
    </div>
  );
}

export default App;
