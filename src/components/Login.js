import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <form className='rounded-lg my-36 mx-auto right-0 left-0 w-3/12 h-3/6 bg-black absolute bg-opacity-20'>
          <div className='text-white font-bold p-4'>
            <h1 className='text-4xl my-4 mx-12'>
              LET'S GET
              <br />
              <span className='flex items-center'>
                STARTED<span className='text-orange-500'>.</span>
              </span>
            </h1>
            <h2 className='p-2 m-2 pb-0 mx-11 my-0'>Mobile Number</h2>
          </div>
          <div className='flex items-center py-1 pt-0 mx-16 content-center rounded-lg bg-white w-3/5'>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="Indian Flag" className='w-8 h-8 mb- m-1 mr-2' />
            <input type="number" className='flex-grow p-2 rounded-lg outline-none w-full' />
          </div>
          <button className='bg-orange-500 flex justify-center items-center w-3/5 p-2 rounded-full my-2 mt-3 mx-16 text-sm text-white'>proceed</button>
          <p className='text-white mt-8 mx-16 text-sm'>Or, Use one of the following options</p>
          <div className='text-white p-2 flex space-x-2 mt-2 mx-14'>
            <button className='p-2  border border-orange-200' >Email</button>
            <button className='p-2 border border-orange-200'>facebook</button>
            <button className='p-2 border border-orange-200'>google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
