import React from "react";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt="Hero"
        className="h-full w-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] text-white p-4 md:top-[50%] flex flex-col">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta,
            suscipit est, aut quidem accusantium incidunt ratione explicabo
            minima vero obcaecati deleniti distinctio enim itaque dolore et
            consequuntur ullam nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
