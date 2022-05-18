import Main from './Main';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <div className='App flex flex-col bg-black min-h-screen'>
        <Navbar
        title= "DEBSOC"
        links = {["Home", "Community", "Curriculum"]} />
        {/* <div className="content"> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Main />} />
            <Route path="/Community" element={<div>HI</div>} />
            <Route path="/Curriculum" element={<div></div>} />
          </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
