import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifCard from './components/GifCard.js';
import axios from "axios";

class App extends Component{




  render(){
    return(
      <div>
        <GifCard/>

      </div>
    );
  }




}



export default App;
