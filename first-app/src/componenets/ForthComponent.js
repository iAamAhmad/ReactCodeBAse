import React from 'react';
import '../styles/four.css'
const ForthComponent = (props) => {
   const { name, age } = props;
   return (
      <div>
         <p>I am {name} and just been created {age} minutes ago.</p>
      </div>
   )
}
export default ForthComponent