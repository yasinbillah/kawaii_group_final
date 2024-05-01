import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles
import Img3 from '../../assets/kats.jpg';  // Ensure correct import paths
import Img2 from '../../assets/achieve.png';  // Ensure correct import paths
import Img1 from '../../assets/sanjana.jpeg';  // Ensure correct import paths

const ServicesData = [
  { id: 1, img: Img1, name: "M/S SANJANA INTERNATIONAL", description: "Recruiting License No: 711 OTIT SO No: BGD000036", link: "https://sanjanahr.com/"},
  { id: 2, img: Img2, name: "ACHIEVE JAPAN", description: "A Japanese Language Learning Center", link: "https://achievejapanssw.com/" },
  { id: 3, img: Img3, name: "KAWAII ADVANCED TECHNOLOGY & SOLUTION LTD.", description: "A SaaS Solution Based Software Company", link: "https://kawaiitechsolution.com/" } // Corrected the link
];

const Services = () => {
  useEffect(() => {
    AOS.init(); // Initializes AOS
  }, []);

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-4xl font-bold mt-1">Explore Our Services</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-8 place-items-center">
            {ServicesData.map((service, index) => (
              <a href={service.link} target="_blank" rel="noopener noreferrer" key={index} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group w-full sm:max-w-sm overflow-hidden" data-aos="zoom-in">
                <div className="h-[150px] pt-4">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="h-24 w-24 object-cover block mx-auto transform -translate-y-8 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <p className="text-red-700 mt-2 text-sm font-semibold">More</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/" className="text-lg text-primary font-semibold hover:underline">
              More Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
