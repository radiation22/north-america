import React from "react";
import about from "../../assets/about_us.jpg";
import pic1 from "../../assets/lgbtq1.jpg";
import pic2 from "../../assets/lgbtq2.jpg";
import pic3 from "../../assets/lgbtq3.jpg";
import pic4 from "../../assets/lgbtq4.jpg";
const About = () => {
  return (
    <div className="py-16 px-8 ">
      <div className="md:flex gap-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-red-700 text-4xl font-bold">About Us</h1>
          <p className="py-8 text-justify">
            North America's only land connection to South America is in
            present-day Panama at the Darien Gap on the Colombia-Panama border,
            placing almost all of Panama within North America.[58][59][60]
            Alternatively, some geologists physiographically locate its southern
            limit at the Isthmus of Tehuantepec, Mexico, with Central America
            extending southeastward to South America from this point.[61] The
            Caribbean islands, or West Indies, are considered part of North
            America.[54] The continental coastline is long and irregular. The
            Gulf of Mexico is the largest body of water indenting the continent,
            followed by Hudson Bay. Others include the Gulf of Saint Lawrence
            and the Gulf of California.
          </p>
          <p>
            Northernafrica.top provides more than information of the groups, but
            also allow you to connect with them.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="mx-auto" src={about} alt="" />
        </div>
      </div>

      {/* <div className="text-center text-white my-16 px-5 md:px-10 py-10 bg-gradient-to-r from-[#FF5200] from-20% via-[#0FBA00] via-40% to-[#660191] to-80%">
        <h1 className="text-xl">CONNECTING FOR FUN</h1>
        <p className="text-xl mt-5">
          We believe connnecting should be fun ! with discussion cummunities and
          pride events , you can find your people without tiring out your thumbs
          .
        </p>
      </div> */}

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 my-10">
        <div>
          <img className="h-[230px]" src={pic1} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic2} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic3} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
