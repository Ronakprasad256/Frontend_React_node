// import './App.css';
import Home from './components/Home';
import Person from './components/person';
import Language from './components/Language';
import UserList from './components/UserList';
import Count from './components/Count';
import {Route, Routes, Link } from 'react-router-dom';
import UserCard from './components/UserCard';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import User from './components/User';
import { useState } from 'react';
import {Usercontext} from "./userContext"
import Eform from './components/Eform';

function App() {
  // const bool = true;
  const [a, setA] = useState(10);
  return (
    <>
      <Usercontext.Provider value={{a, setA}}>
      <nav>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            {/* <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/> */}
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</Link>
        </li>
        <li>
          <Link to="/language" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Languages</Link>
          </li>
          <li>
          <Link to="/count" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">counter</Link>
          </li>
          <li>
          <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </nav>
      {/* {bool && <Home />} */}
      {/* we can also use this instead of terniary operator */}
      {/* {bool ? <Home /> : 'null'} */}
      {/* <Person val={'Ronak'} /> */}
      {/* <Counter count={2}  /> */}
      {/* <Counter count={0} value={10}/> */}
      {/* <Language /> */}
      {/* <UserList/> */}
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" exact element={<UserList />} />
        <Route path="/users/:username" exact element={<User/>} />
        <Route path="/language" exact element={<Language />} />
        <Route path="/count" exact element={<Count count={0} value={1} /> } />
        <Route path="*" element={<NotFound />} />
        <Route path='contact' exact element={<Contact/>}/>
        <Route path='form' exact element={<Eform/>}/>
        </Routes>
        </Usercontext.Provider>
    </>
  );
}

export default App;

// props stands for property
