import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import React,{Fragment} from 'react';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <h1>react project</h1>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Addproduct />} />
      <Route path="/update" element={<Updateproduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      </Routes>
      </Router>
      </div>    
  );
}
export default App;
