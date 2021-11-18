
import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navbar';
import Tabs from './Tabs';
import Characters from './Characters';

function App() {
const [display, setDisplay] = useState(true);

const handleDisplay = () => {
  setDisplay(false);
};

const handleDisplay1 = () => {
  setDisplay(true);
}

  return (
    <div className="App py-5" id="planet-tab">
      <div id="home-container">

      <Navigation/>
     <div id="nav-buttons" className="mb-3">
     <button onClick={handleDisplay1} id="nav-btn">Planets</button>
     <button onClick={handleDisplay} id="nav-btn">Characters</button>
     </div>

      {display === true ? <Tabs />: <Characters />}
      </div>
    
     
     
    </div>
  );
}

export default App;
