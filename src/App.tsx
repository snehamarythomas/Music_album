import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SearchBox from './features/search/component/SearchBox';
import SearchList from './features/search/component/SearchList';
import axios from 'axios';

function App() {
  return (
    <div>
      <SearchBox/>    
    </div>
  
  );
}

export default App;
