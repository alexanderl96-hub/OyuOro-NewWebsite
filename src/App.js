import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from '../src/Components/Home/Home'

import NavBar from './Components/NavBar/NavBar'
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer /> */}
      </Router>
     
    </div>
  );
}

export default App;
