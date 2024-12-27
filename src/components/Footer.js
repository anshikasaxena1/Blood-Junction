import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-customWhite">
      <div className="w-full mt-20 pb-20 bg-rose-300 shadow border border-red-700/50">
        {/* Grid for Contact Form and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-[3px] divide-black px-6 md:px-12 py-10">
          {/* Contact Form */}
          <div>
            <h1 className="text-contactText font-semibold text-2xl md:text-4xl font-sans pb-6 tracking-wide">
              Contact Us
            </h1>
            <form className="space-y-4">
              <div>
                <p className="font-medium text-lg">Name*</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    className="rounded-2xl w-full md:w-1/2 px-4 py-2 border"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="rounded-2xl w-full md:w-1/2 px-4 py-2 border"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium text-lg">Email*</p>
                <input
                  type="email"
                  className="rounded-2xl w-full px-4 py-2 border"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <p className="font-medium text-lg">Query*</p>
                <textarea
                  className="rounded-2xl w-full px-4 py-2 border"
                  placeholder="Questions you have!"
                  rows={4}
                />
              </div>
              <div className="flex justify-center">
                <button className="text-white text-xl py-2 px-10 bg-red-950 rounded-2xl tracking-wide font-semibold hover:bg-red-800">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Sitemap and More Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* Sitemap */}
            <div>
              <h1 className="text-contactText font-semibold text-xl font-sans pb-4 tracking-wide">
                Sitemap
              </h1>
              <ul className="text-customTextColor space-y-3">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Need Blood
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Organise Camp
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h1 className="text-contactText font-semibold text-xl font-sans pb-4 tracking-wide">
                More
              </h1>
              <ul className="text-customTextColor space-y-3">
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-center md:justify-end items-center px-6 py-4">
          <span className="text-customTextColor">Made By</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
