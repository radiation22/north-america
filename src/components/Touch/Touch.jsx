// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFA500] text-[#A52729] py-8">
      <div className="md:flex px-16">
        {/* Company Contact Information */}
        <div className="mb-4 w-full md:w-1/2 pt-16">
          <h2 className="text-2xl font-semibold mb-4">Find Us :</h2>
          <p>18 Berry drive, Red Lake, Ontario, P0V2M0, Canada</p>
          <p>123 Street, City</p>
          <p>Phone :</p>
          <p>Toll Free Number</p>
          <p>+1 807-728-1666</p>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full rounded-md border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full rounded-md border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full rounded-md border border-gray-300"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
