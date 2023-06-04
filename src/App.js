import React from 'react';
import Header from './Header';
import Cards from './Card';
import Sdata from './Sdata';
import './App.css';

function card(val){
  return (
    <Cards 
      imgsrc={val.imgsrc}
      title= {val.title}
      link ={val.link} />
  );
}

function App() {
  return (
    <>
      <Header />
      {Sdata.map(card)}
    </>
  );
}

export default App;
