import React from 'react'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from '../src/Components/Home/Home'
import Banner from '../src/Components/Banner/Banner'

import NavBar from './Components/NavBar/NavBar'
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route exact path='/' element={<Banner/>} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
