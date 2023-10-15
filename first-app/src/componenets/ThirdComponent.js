import React from 'react';
import '../styles/third.css'
import ForthComponent from './ForthComponent';

const ThirdComponent = ({ title }) => {
   return (
      <div>
         <div className='third__component'>I am {title}</div>
         <div>
            <ForthComponent name="Forth Component" age={3} />
         </div>
      </div>


   )
}

export default ThirdComponent