import React from 'react'
import { useNavigate } from "react-router-dom"

const Tailwind = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className="w-auto max-w-none m-8 flex justify-around flex-wrap">
            <div className="text-center px-6 py-4">
               <img src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="w-32 h-32 object-cover rounded-full object-top"
                  alt=''
               />
               <h3 className='font-bold text-xl'>Alexa Kardi</h3>
               <p className='text-sm text-gray-600'>Founder and CEO</p>
            </div>

            <div className="text-center px-6 py-4">
               <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="w-32 h-32 object-cover rounded-full object-top"
                  alt=''
               />
               <h3 className='font-bold text-xl'>Tavell Monroe</h3>
               <p className='text-sm text-gray-600'>Web Developer</p>
            </div>

            <div className="text-center px-6 py-4">
               <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" className="w-32 h-32 object-cover rounded-full object-top"
                  alt=''
               />
               <h3 className=''>Adale Smith</h3>
               <h3 className='font-bold text-xl'>Adale Smith</h3>
               <p className='text-sm text-gray-600'>Marketing Specialist</p>
            </div>

            <div className="text-center px-6 py-4">
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300" className="w-32 h-32 object-cover rounded-full object-top"
                  alt='' />
               <h3 className='font-bold text-xl'>Thomas Mason</h3>
               <p className='text-sm text-gray-600'>UX Designer</p>
            </div>
         </div>
         {/* Buttons for Navigation! */}

         <div className='text-center'>
            <button
               className='p-4 bg-slate-500 mx-3 rounded-full text-white'
               onClick={() => navigate('/second')}>
               Go to Second
            </button>
         </div>

      </div>

   )
}

export default Tailwind