import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderClass from './components/TinderClass';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderClass />
      <SwipeButtons />
    </div>
  );
}

export default App;
