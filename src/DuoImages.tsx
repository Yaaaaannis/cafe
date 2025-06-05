import React from 'react';
import { Link } from 'react-router-dom';

const DuoImages: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="relative w-1/2 group">
        <img src="/duo1.png" alt="Duo 1" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-[#6C584D] opacity-0 group-hover:opacity-30 transition-all duration-300" />
        <Link 
          to="/what" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <button
            style={{
              fontFamily: 'DinaChaumont',
              fontWeight: 800,
            }}
            className="bg-[#FFFFEF] text-[#6C584D] px-8 py-4 text-2xl hover:bg-[#6C584D] hover:text-[#FFFFEF] transition-all duration-300 cursor-pointer"
          >
            Our Menu
          </button>
        </Link>
      </div>
      <div className="relative w-1/2 group">
        <img src="/duo2.png" alt="Duo 2" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-[#6C584D] opacity-0 group-hover:opacity-30 transition-all duration-300" />
        <Link 
          to="/merch" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <button
            style={{
              fontFamily: 'DinaChaumont',
              fontWeight: 800,
            }}
            className="bg-[#FFFFEF] text-[#6C584D] px-8 py-4 text-2xl hover:bg-[#6C584D] hover:text-[#FFFFEF] transition-all duration-300 cursor-pointer"
          >
            Our Merch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DuoImages;