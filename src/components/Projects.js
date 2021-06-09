import React from 'react';

const Projects = () => {
    return (
        <div className="container justify-between grid grid-rows-1 grid-flow-col gap-4 m-auto mt-5">
           <div className="">
               <img src="https://picsum.photos/400/300" alt="random img" />
               <h1 className="mt-5 font-bold text-2xl text-center">Project-1</h1>
           </div>
           <div className="">
               <img src="https://picsum.photos/400/300" alt="random img" />
               <h1 className="mt-5 font-bold text-2xl text-center">Project-2</h1>
           </div>
           <div className="">
               <img src="https://picsum.photos/400/300" alt="random img" />
               <h1 className="mt-5 font-bold text-2xl text-center">Project-3</h1>
           </div>
        </div>
    );
};

export default Projects;