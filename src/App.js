import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import NamePlayer from './components/NamePlayer.js';
import AddUnits from './components/AddUnits.js';

function App() {
  const navigate = useNavigate();
  
  const navigateToNamePlayer = () => {
    navigate('/nameplayer');
  };

  const navigateToAddUnits = () => {
    navigate('/addunits')
  };

  return (
    <div className="App">
      <div className='navigation'>
        <button className='btn-navigate' onClick={navigateToNamePlayer}>
          NamePlayer
        </button>
        <button className='btn-navigate' onClick={navigateToAddUnits}>
          Add Units
        </button>
      </div>

    <Routes>
      <Route path="/nameplayer/*" element={<NamePlayer />} />
      <Route path="/addunits" element={<AddUnits />} />
    </Routes>  
    </div>
  );
}

export default App;
