//import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Registetion } from './Com/Registetion';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Register' element={<Registetion/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
