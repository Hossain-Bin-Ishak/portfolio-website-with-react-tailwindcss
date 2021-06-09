import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header m-auto mt-3 flex justify-between py-1 px-5 items-center">
         <div className="logo">
            <h2 className="text-3xl font-bold"><Link to='/'>Hossain</Link></h2>
         </div>
         <nav>
             <ul className="flex font-semibold">
                 <li   className="mr-5 hover:bg-green-200 rounded-full p-2 px-4">
                     <Link to='/'>Home</Link>
                 </li>
                 <li  className="mr-5 hover:bg-green-200 rounded-full p-2 px-4">
                     <Link to='/projects'>Projects</Link>
                 </li>
                 <li className="mr-5 bg-green-500 hover:bg-green-200 hover:text-black text-white rounded-full p-2 px-4">
                     <Link to='/hire'>Hire</Link>
                 </li>
             </ul>
         </nav>
        </div>
    );
};

export default Header;