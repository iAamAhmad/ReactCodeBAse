import React from 'react';
import '../styles/four.css'

const ForthComponent = ({ name, age }) => {
   return (
      <div>
         <p>I am {name} and just been created {age} minutes ago.</p>
      </div>
   )
}

export default ForthComponent