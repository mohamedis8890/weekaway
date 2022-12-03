import React from "react";

const Activities = () => {
  return (
    <div className="max-w-large m-auto w-full sm:flex mt-[-75px] ">
      <div className="p-4 relative">
        <h3 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>

        <img
          className="border-4 object-cover w-full h-full border-white shadow-lg"
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="activities"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Cruises
        </h3>

        <img
          className="border-4 object-cover w-full h-full border-white shadow-lg "
          src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="activities"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>

        <img
          className="border-4 object-cover w-full h-full border-white shadow-lg   "
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="activities"
        />
      </div>
    </div>
  );
};

export default Activities;
