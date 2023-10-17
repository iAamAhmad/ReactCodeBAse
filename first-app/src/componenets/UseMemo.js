import React, { useState, useMemo } from 'react';

function FactorialCalculator({ number }) {
   const factorial = useMemo(() => {
      let result = 1;
      for (let i = 1; i <= number; i++) {
         result *= i;
      }
      return result;
   }, [number]);

   return (
      <div>
         <p>Factorial of {number} is: {factorial}</p>
      </div>
   );
}

function App() {
   const [inputNumber, setInputNumber] = useState(5);

   return (
      <div>
         <input
            type="number"
            value={inputNumber}
            onChange={(e) => setInputNumber(parseInt(e.target.value))}
         />
         <FactorialCalculator number={inputNumber} />
      </div>
   );
}

export default App;
