import React from 'react';

const Hire = () => {
    return (
        <div>
           <section className="mx-auto mt-20">
               <div className="flex flex-col items-center justify-center text-center lg:flex-row">
               <div className="bg-green-500 p-8 text-white font-bold lg:pt-40 lg:w-50 lg:h-96">
                   <h2 className="text-5xl">Hire Me</h2>
                   <p>Replies within 24 hours</p>
               </div>
               <form className="flex flex-col bg-green-500">
                   <input className="bg-green-300 p-2" type="text" name="username" id="username" placeholder="Your Name" />
                   <input className="bg-green-300 p-2 mt-2" type="email" name="email" id="email" placeholder="Your Email" />
                   <textarea className="bg-green-300 p-2 mt-2" name="textArea" id="textArea" cols="30" rows="10" placeholder="Message"></textarea>
                   <input className="bg-green-300 p-2 mt-2" type="submit" value="Submit" />
               </form>
               </div>
           </section>
        </div>
    );
};

export default Hire;