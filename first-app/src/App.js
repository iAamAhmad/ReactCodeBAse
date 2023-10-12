import React from 'react';
import './styles/app.css'
import Profile from './componenets/FirstComponent';
import SecondComponent from './componenets/SecondComponent';
const App = () => {
  return (
    <div className='big__div'>
      <div>
        <SecondComponent />
      </div>

      <div className='child__div'>
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div className='child__div'>
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div className='child__div'>
        <Profile />
        <Profile />
        <Profile />
      </div><div className='child__div'>
        <Profile />
        <Profile />
        <Profile />
      </div><div className='child__div'>
        <Profile />
        <Profile />
        <Profile />
      </div>




    </div>
  )
}

export default App;