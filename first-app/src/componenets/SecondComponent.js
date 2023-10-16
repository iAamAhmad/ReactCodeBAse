import React, { useState, useEffect } from 'react';
import '../styles/app.css'
import ThirdComponent from './ThirdComponent';
import Button from './Button';
import ForthComponent from './ForthComponent';

function SecondComponent() {
   const [count, setCount] = useState(0);
   const increment = () => {
      setCount(count + 1);
   }
   const decrement = () => {
      setCount(count - 1);
   }
   useEffect(() => {
      console.log(`Count has changed to: ${count}`);

   }, [count]);
   return (
      <div className="counter-app">
         <h1 className="title">Counter App and I am Second Component</h1>
         <p className="count">Count: {count}</p>
         <div className="button-container">
            <button className="increment" onClick={increment}>Increment</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
         </div>

         {/* calling third component here */}
         <div>
            <ThirdComponent title="Third Component" />
            <ThirdComponent title="Third Component" />
            <Button text="Sign Up" />
            <ForthComponent name="Jawad" age={18} />

         </div>
      </div>
   );
}
export default SecondComponent;
