import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifCard from './components/GifCard.js';
import SearchField from  './components/SearchField.js';
import axios from "axios";
import GifSearch from './GifSearch';

class App extends Component{

  render(){
    
    return(
      <div>
        <GifCard />
        <GifSearch/>
      </div>
    );
  }




}



export default App;
