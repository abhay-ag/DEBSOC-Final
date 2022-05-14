import Main from './Main';
import Navbar from './Navbar';
import './style.css';

function App() {
  return (
    <div>
      <Navbar
      title= "DEBSOC"
      links = {["Home", "Community", "Curriculum"]} 
      linkTitle = {["/", "/community", "/curriculum"]}/>
      <Main />
    </div>
  );
}

export default App;
