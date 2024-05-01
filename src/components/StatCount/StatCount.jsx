import React from 'react';
import CountUp from 'react-countup';
import { MdWork, MdGroup, MdStar, MdTrendingUp } from 'react-icons/md';

const StatsCounter = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-16 my-32 relative z-10">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-8 bg-blue-100 p-5 rounded-lg">
        <div className="flex flex-col items-center p-4 border-4 border-gray-800 shadow-xl rounded-lg bg-blue-200">
          <MdWork className="text-6xl text-yellow-500 mb-2"/>
          <h3 className="text-5xl font-extrabold leading-tight text-center text-yellow-500">
            <CountUp end={24} duration={2.5} />
          </h3>
          <p className="text-base font-medium leading-7 text-center text-red-500">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-gray-800 shadow-xl rounded-lg bg-blue-200">
          <MdGroup className="text-6xl text-yellow-500 mb-2"/>
          <h3 className="text-5xl font-extrabold leading-tight text-center text-yellow-500">
            <CountUp end={12} duration={2.5} />
          </h3>
          <p className="text-base font-medium leading-7 text-center text-red-500">Sister Concerns</p>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-gray-800 shadow-xl rounded-lg bg-blue-200">
          <MdStar className="text-6xl text-yellow-500 mb-2"/>
          <h3 className="text-5xl font-extrabold leading-tight text-center text-yellow-500">
            <CountUp end={300} duration={2.5} />+
          </h3>
          <p className="text-base font-medium leading-7 text-center text-red-500">Employees</p>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-gray-800 shadow-xl rounded-lg bg-blue-200">
          <MdTrendingUp className="text-6xl text-yellow-500 mb-2"/>
          <h3 className="text-5xl font-extrabold leading-tight text-center text-yellow-500">
            <CountUp end={150} duration={2.5} />%
          </h3>
          <p className="text-base font-medium leading-7 text-center text-red-500">Growth</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
