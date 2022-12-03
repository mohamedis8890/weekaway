import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-large p-4 w-full m-auto">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full rounded-md p-2 border">
            <option>Grande Antigua</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="lg:max-w-[250px] w-full flex flex-col my-2 p-2">
            <label>Check-In</label>
            <input className="rounded-md border p-2" type="date" />
          </div>
          <div className="lg:max-w-[250px] w-full flex flex-col my-2 p-2">
            <label>Check-Out</label>
            <input className="rounded-md border p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2  p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
