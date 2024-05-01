import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import news from '../../assets/videos/sswNews.mp4';
import office from '../../assets/videos/kawaiiOffice.mp4'


const videoData = [
  {
    id: 1,
    videoSrc: office, 
    // https://player.vimeo.com/video/939717220?h=81de680d4b&autoplay=1&background=1&muted=1
    title: "OUR NEW OFFICE",
    subtitle: "WITH ALL MODERN FACILITIES",
    path: "/kawaiiOffice"
  },
  // {
  //   id: 2,
  //   videoSrc: "https://player.vimeo.com/video/939704093?h=8ae2dd1e5a&autoplay=1&background=1&muted=1",
  //   title: "JAPAN SSW TRAINING CENTRE",
  //   subtitle: "The Centre plans to train 50,000 workers in the next decade, enhancing their competitiveness in the Specific Skilled Workers (SSW) sector.",
  //   path: "/ssw"
  // },
  // {
  //   id: 3,
  //   videoSrc: "https://player.vimeo.com/video/939723499?h=66c749e068&autoplay=1&background=1&muted=1",
  //   title: "Japan Green City",
  //   subtitle: "Futuristic Green City",
  //   path: "/japanGreen"
  // },
  // {
  //   id: 4,
  //   videoSrc: "https://player.vimeo.com/video/939705305?h=2debb0360a&autoplay=1&background=1&muted=1",
  //   title: "Japan Business Center",
  //   subtitle: "Business hub for Japan-Bangladesh Friendship projects",
  //   path: "/japanBusiness"
  // },
  // {
  //   id: 5,
  //   videoSrc: "https://player.vimeo.com/video/939708754?badge=0&autoplay=1&player_id=0&app_id=58479&background=1&muted=1",
  //   title: "Pachdona Business Center",
  //   subtitle: "Business hub for Japan-Bangladesh Friendship projects",
  //   path: "/pachdona"
  // },
  {
    id: 5,
    videoSrc: news,
    title: "Pachdona SSW Training Center Inaugeration",
    subtitle: "Business hub for Japan-Bangladesh Friendship projects",
    path: "/pachdona"
  }
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoData.length);
    }, 5000); // Change videos every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once on mount and never again

  const { videoSrc, title, subtitle, path } = videoData[currentVideoIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        key={videoSrc} // Change key every time the videoSrc changes
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ objectFit: 'cover', top: 0, left: 0 }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            {title}
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            {subtitle}
          </p>
          <div className="text-left">
            <Link
              to={path}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;