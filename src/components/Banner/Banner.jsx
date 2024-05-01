import React from "react";
import BiryaniImg from "../../assets/kawaiiOffice.png";
import Vector from "../../assets/vector3.png";
import { Link } from 'react-router-dom';

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  About US
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                “Kawaii” is the culture of cuteness in Japan. We focus on fashion and style, engineering & and construction, apparel, technology & and innovation, international business consultancy, human resources, automobile, language and skill development Training Centre, Trading organizations, Export–import, and so on.
                  <br />
                  <br />
                  With 37 years of experience collaborating with Japan, our management brings a wealth of knowledge.
We are experts in the field of Human Resources and Business Development.
Over 2,000 students have been successfully sent to Japan for higher study through our programs.
Our deep understanding of Japanese culture sets us apart from others.
We possess insights into the specific needs of the Japanese job sector.
Extensive research into SSW since 2019.
Our team includes a native Japanese language teacher to facilitate learning.
We have established Memorandums of Understanding (MoUs) with multiple Human Resource companies in Japan.
There is currently a demand for 20,000 job placements across various sectors.
We offer a job placement guarantee, contingent on candidates meeting specific criteria.
Our presence extends to having an office in Japan, enhancing our capacity to serve better.
We provide support services for our candidates after moving to Japan.
                </p>
                <div>
                <Link to="/about">
      <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
        Learn More
      </button>
    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
