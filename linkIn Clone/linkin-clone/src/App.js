import React from 'react';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/SideBar/Sidebar';
import { Feed } from './Components/Feed/Feed';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>

    </div>
  );
}

export default App;
