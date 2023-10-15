import React from 'react';
import './styles/app.css'
import SecondComponent from './componenets/SecondComponent';
const App = () => {
  return (
    <div className='big__div'>
      <div>
        <SecondComponent />
      </div>
    </div>
  )
}

export default App;