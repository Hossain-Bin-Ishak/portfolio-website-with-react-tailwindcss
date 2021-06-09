import React from 'react';
import {Link} from 'react-router-dom'

const Showcase = () => {
    return (
        <div>
           <section className="showcase">
               <div className="overlay flex flex-col items-center justify-center">
                   <h1 className="text-5xl font-bold text-center mb-5">I create <span className="text-green-500">brand awareness</span> for small business</h1>
                <div className="ms-auto mt-10">
                <Link to='/hire' className="mr-5 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 text-white">Get Started</Link>
                <Link to='/projects' className="mr-5 bg-white p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 text-black hover:text-white">Projects</Link>
                </div>
               </div>
           </section>
        </div>
    );
};

export default Showcase;