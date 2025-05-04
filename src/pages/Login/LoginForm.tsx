'use client'

import React, { useState } from "react";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex justify-center items-start pt-4 pb-0 min-h-screen bg-white ring shadow-xl ring-stone-900/5">
      <div className="w-[500px] h-[500px] bg-white rounded shadow-lg outline outline-black/5">
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-center text-orange-100 font-medium ${
              activeTab === "login"
                ? "bg-orange-700 rounded-tl-md border-b-2 border-orange-800 hover:bg-orange-800"
                : "bg-orange-50 text-stone-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-3 text-center text-orange-100 font-medium ${
              activeTab === "signup"
                ? "bg-stone-700 rounded-tr-md border-b-2 border-stone-800"
                : "bg-orange-50 text-stone-700"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>
        </div>

        <div className="p-6">
          {activeTab === "login" && (
            <form className="space-y-4">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                  <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                  <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                  <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                </svg>
                Log in with Google
              </button>

              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                Or
              </div>

              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <div className="text-sm">
                <a href="#" className="font-semibold text-stone-600 grid place-content-end hover:text-orange-700">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full mt-5 bg-orange-700 text-orange-50 py-2 rounded hover:bg-orange-800"
              >
                Login
              </button>
            </form>
          )}

          {activeTab === "signup" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Retype password"
                className="w-full px-4 py-2 rounded border-1 border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full mt-5 bg-stone-700 text-orange-50 py-2 rounded hover:bg-stone-600"
              >
                Signup
              </button>
              <div className="flex">
                <input
                  type="checkbox"
                  className="shrink-0 mt-0.5 hover:accent-orange-700 border-stone-600 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-default-checkbox"
                />
                <label htmlFor="hs-default-checkbox" className="text-sm text-stone-500 ms-3 dark:text-neutral-400">
                  I accept the{" "}
                  <a
                    className="text-stone-600 decoration-2 focus:outline-hidden focus:underline font-medium hover:text-orange-700"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
