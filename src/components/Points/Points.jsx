import React from "react";
import { FaCalendarAlt, FaGlobe, FaHeart, FaUserFriends } from "react-icons/fa";
import "./point.css";
const Points = () => {
  return (
    <div className="px-2 py-16 lg:px-16">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 py-10 px-10 point">
        <div className="text-center">
          <FaCalendarAlt className="text-5xl mx-auto text-[#7EBEC5]" />
          <p className="text-2xl mt-5 text-red-700">
            Discover Indigenous Events
          </p>
        </div>
        <div className="text-center">
          <FaHeart className="text-5xl mx-auto text-[#7EBEC5]" />
          <p className="text-2xl mt-5 text-red-700">
            Share your story With Community
          </p>
        </div>
        <div className="text-center">
          <FaUserFriends className="text-5xl mx-auto text-[#7EBEC5]" />
          <p className="text-2xl mt-5 text-red-700">
            Connect : Find Right Person For you
          </p>
        </div>
        <div className="text-center">
          <FaGlobe className="text-5xl mx-auto text-[#7EBEC5]" />
          <p className="text-2xl mt-5 text-red-700">
            Viracore is where you connect commmunity for Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Points;
