import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './App.scss';

function App() {
  return (
     <div>
      <NavBar></NavBar>
      <Home></Home>
     </div>
  );
}

export default App;
