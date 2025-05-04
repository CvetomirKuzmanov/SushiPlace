'use client'
import React, { useState } from 'react';
//import 'font-awesome/css/font-awesome.min.css';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="w-[480px] h-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className={`flex h-[55px]`}>
        <div
          className={`w-1/2 text-center leading-[55px] cursor-pointer uppercase text-sm ${
            !isSignup ? 'bg-gray-200' : ''
          }`}
          onClick={() => setIsSignup(false)}
        >
          Login
        </div>
        <div
          className={`w-1/2 text-center leading-[55px] cursor-pointer uppercase text-sm ${
            isSignup ? 'bg-gray-200' : ''
          }`}
          onClick={() => setIsSignup(true)}
        >
          Signup
        </div>
      </div>

      {/* Forms container */}
      <div className="relative w-[200%] h-[calc(100%-55px)] flex transition-transform duration-300"
           style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0%)' }}
      >
        {/* Login Form */}
        <div className="w-1/2 px-4 pt-2 border-l border-gray-300 bg-white">
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="rem" className="w-4 h-4" />
            <label htmlFor="rem" className="text-sm cursor-pointer">
              Remember me
            </label>
          </div>
          <div className="mb-2">
            <button className="w-full h-11 bg-blue-500 text-white text-sm uppercase">
              Login
            </button>
          </div>
          <div className="text-center py-2">
            <span className="text-sm font-semibold text-gray-700">OR</span>
          </div>
          <div className="border-t border-gray-300 mt-2">
            <div className="bg-[#3b5998] text-white text-sm h-10 leading-10 pl-12 relative cursor-pointer">
              <i className="fa fa-facebook absolute left-0 w-10 h-10 bg-black/30 text-center leading-10" />
              Login with Facebook
            </div>
            <div className="bg-[tomato] text-white text-sm h-10 leading-10 pl-12 relative cursor-pointer">
              <i className="fa fa-google absolute left-0 w-10 h-10 bg-black/30 text-center leading-10" />
              Login with Google
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="w-1/2 px-4 pt-2 border-l border-gray-300 bg-white">
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold uppercase">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-8 px-2 text-sm border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="agr" className="w-4 h-4" />
            <label htmlFor="agr" className="text-sm cursor-pointer">
              Agree terms & conditions.
            </label>
          </div>
          <div>
            <button className="w-full h-11 bg-[#0f2d41] text-white text-sm uppercase">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;