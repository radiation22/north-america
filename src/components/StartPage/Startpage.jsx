import React from "react";
import Login from "../Login/Login";
import HomeFooter from "../Footer/HomeFooter";
import pic1 from "../../assets/family-friendly-ski-resorts.jpg";
import About from "../About/About";
import Points from "../Points/Points";
import Touch from "../Touch/Touch";

const StartPage = () => {
  return (
    <div>
      <div className="flex bg-[#2F0B0C] flex-col-reverse md:flex lg:flex-row items-center py-5 px-2 w-full">
        {/* Content section */}
        <div className="w-[100%] p-2 lg:p-8 lg:w-[50%]">
          <h1 className="text-white text-4xl font-bold">
            Connect with friends!
          </h1>
          <h1 className="text-white text-xl mt-4 font-bold">
            North America is a continent in the Northern and Western
            Hemispheres.
          </h1>

          <img
            className="rounded-xl  border-2 mt-3 mx-auto"
            src={pic1}
            alt=""
          />
        </div>

        {/* Login section */}
        <div className="w-[100%] lg:w-[50%] p-2 lg:p-10">
          <Login></Login>
        </div>
      </div>

      <div className="px-3 lg:px-8 bg-white">
        <About></About>
      </div>

      <HomeFooter></HomeFooter>
    </div>
  );
};

export default StartPage;
