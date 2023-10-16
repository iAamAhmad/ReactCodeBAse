import React, { useState, useEffect } from 'react';

const UseEffectComp = () => {
   const[name, setName]=useEffect;
   //* It renders every time the components changes.
   useEffect(()=>{
      console.log(' I will be re rendered every time');
   });

   
   //only renders one time
   useEffect(()=>{
      console.log(' I will be re rendered every time');
   },[]);


   //* Only renders when the variable passed in the Dependency array is changed.
   useEffect(()=>{
      console.log(`I will be re rendered every time my ${name} changes`);
      //* this return function is actually clean Up code
      return(()=>{

      });
   },[name]);

   return (
      <div><h1>Hello from my Function</h1></div>
   )
}

export default UseEffectComp