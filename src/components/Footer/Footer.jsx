import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import footerLogo from "../../assets/kawaii_group.png";
import Flag from 'react-flagkit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
        <div className="py-8 px-4 flex flex-col items-center justify-center text-center">
  <h5 className="text-xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
    <img src={footerLogo} alt="Logo" className="w-20 sm:w-24" />
    <span className="text-sm sm:text-lg text-red-500 whitespace-nowrap">QUALITY INNOVATION IS THE KEY</span> 
  </h5>

  {/* Social Handle */}
  <div className="flex items-center gap-3 mt-6">
    <a href="https://www.facebook.com/profile.php?id=61550506239595&mibextid=ZbWKwL" target="_blank">
      <FaFacebook className="text-3xl" />
    </a>
    <a href="https://www.linkedin.com/company/kawaii-advanced-technology-solution-ltd/" target="_blank">
      <FaLinkedin className="text-3xl" />
    </a>
  </div>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
            <div className="py-8 px-4 flex flex-col items-center justify-center">
    <h1 className="text-xl font-bold text-center mb-3">
        Important Links
    </h1>
    <ul className="flex flex-col gap-3 items-center">
            <li className="cursor-pointer">
                <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
                <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer">
                <Link to="/services">Services</Link>
            </li>
            <li className="cursor-pointer">
                <Link to="/login">Login</Link>
            </li>
        </ul>
</div>

            </div> 
            {/* imp link end  */}
             {/* bangladesh office  */}
             <div className="p-5">
             <h1 className="text-xl font-bold mb-3 flex items-center">
             <Flag country="BD" size={15} className="mr-2" />Bangladesh Office:
                </h1>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p> Rampura Bonosree, Block:B, House: 11, Dhaka-1219
</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+8802-55123797</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdEmail />
              <p>info@kawaiibd.com</p>
            </div>
            </div>
            {/* japan office  */}
           <div className="p-5">
           <h1 className="text-xl font-bold mb-3 flex items-center">
  <Flag country="JP" size={15} className="mr-2" /> Japan Office:
</h1>
           <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p> 433 Soft Town Aoyama  4-1-24 Jingumae Shibuya-Ku Tokyo 150-0001 Japan.
</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p> +81 03-4363-5903, +81
090-5343-5325</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdEmail />
              <p>info@kawaiijapanbd.com, junjiueda@kawaiijapanbd.com </p>
            </div>
           </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved ||Powered by Kawaii Advanced Technology & Solution Ltd.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
