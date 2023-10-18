import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function SecondComponent() {
   const [count, setCount] = useState(0);
   const navigate = useNavigate();
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
            <button
               className="p-4 bg-slate-500 mx-3 rounded-3xl text-white"
               onClick={increment}>
               Increment
            </button>
            <button
               className="p-4 bg-slate-700 mx-3 rounded-3xl text-white"
               onClick={decrement}>
               Decrement
            </button>
         </div>
         <div className='m-6'>
            <button
               className="p-4 bg-slate-700 mx-3 rounded-3xl text-white"
               onClick={() => navigate('/')}>
               Go Back
            </button>
         </div>
      </div>
   );
}
export default SecondComponent;
