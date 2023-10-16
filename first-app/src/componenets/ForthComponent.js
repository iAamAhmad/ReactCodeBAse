import React from 'react';
import '../styles/four.css'
import Button from './Button';

const ForthComponent = ({ name, age }) => {
   return (
      <div>
         <p>I am {name} and just been created {age} minutes ago.</p>
         <Button text="Contact Us" />
      </div>
   )
}

export default ForthComponent