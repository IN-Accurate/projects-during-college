import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div
      className={`bg-${
        !isStudent ? 'quaternary-color' : 'white'
      } min-h-screen flex flex-col `}
    >
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='mx-auto  flex items-center justify-center'>
          <img
            className='rounded-lg shadow-xl h-16 w-16 absolute top-10'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBxdFdZ4BfVxCiG4zoquaZOeYbtEqH-jRJUFX3Q2NUrgByDQFtLDgcxxnEjUnVi30Af4&usqp=CAU0'
            alt='Your Company'
          />
        </div>

        <div className='mx-auto  flex items-center justify-center relative top-20'>
          <h2
            className={`mt-20 text-center text-xl font-bold leading-6 tracking-tight text-${
              !isStudent ? 'white' : 'quaternary-color'
            } `}
          >
            Log in to your account as Admin!
          </h2>
        </div>
        <br />

        {/* <div className='mx-auto  flex items-center justify-center relative top-20'>
          {' '}
          <div className='flex justify-center space-x-3 '>
            <button
              type='button'
              className={`btn ${isStudent ? 'bg-black' : 'bg-white'}
                ${isStudent ? 'text-white' : 'text-black'}
                rounded-full
                transition-all duration-300 ease-out
                hover:bg-white hover:text-black hover:border-white
                hover:scale-110 hover:transform hover:border-none hover:animate-step-end`}
              onClick={() => {
                setIsStudent(true);
              }}
            >
              Student
            </button>
            <button
              type='submit'
              className={`btn ${isStudent ? 'bg-white' : 'bg-black'}
                ${isStudent ? 'text-black' : 'text-white'}
                rounded-full
                transition-all duration-300 ease-out
                hover:bg-black hover:text-white hover:border-black
                hover:scale-110 hover:transform hover:border-none hover:animate-step-end`}
              onClick={() => {
                setIsStudent(false);
              }}
            >
              Admin
            </button>
          </div>
        </div> */}
      </div>
      <div className='mt-40 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-4' action='#' method='POST'>
          <div>
            <div>
              {isStudent && (
                <div>
                  <p className='block ps-10 text-lg font-size: 1.125rem; leading-15 text-white'>
                    Feature coming soon!
                  </p>
                  {/* <label
                    htmlFor='uid'
                    className={`block text-sm font-medium leading-5 text-${
                      isStudent ? 'white' : 'quaternary-color'
                    }`}
                  >
                    UID
                  </label>
                  <div className='mt-2'>
                    <input
                      id='uid'
                      name='uid'
                      type='text'
                      autoComplete='off'
                      required
                      className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
                    />
                  </div> */}
                </div>
              )}
            </div>
          </div>

          <div>
            <div>
              {!isStudent && (
                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className={`block text-sm font-medium leading-5 text-${
                        !isStudent ? 'white' : 'quaternary-color'
                      }`}
                    >
                      Password
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isStudent && (
            <div>
              {' '}
              <div>
                <button
                  type='submit'
                  className={`btn-2 flex w-full justify-center rounded-md py-3 text-lg font-semibold leading-5 text-white shadow-md hover:bg-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none ${
                    isStudent ? 'transform hover:scale-105' : ''
                  }`}
                >
                  Log in
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
