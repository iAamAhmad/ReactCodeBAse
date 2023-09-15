import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import ChatScreen from './components/ChatScreen';
import Preview from './components/Preview';
import WebcamCapture from './components/WebcamCapture';
function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<ChatScreen />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
