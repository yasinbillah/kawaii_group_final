import React, { useState } from 'react';
import Video from "../../components/Video/Video";
const Gallery = () => {
  const galleryImages = [
    { img: "https://i.ibb.co/wC5wB1R/image1.jpg" },
    { img: "https://i.ibb.co/8sqrH34/image2.jpg" },
    { img: "https://i.ibb.co/7vR3TKm/image3.jpg" },
    { img: "https://i.ibb.co/VNvnCwx/image4.jpg" },
    { img: "https://i.ibb.co/Kh5K141/image5.jpg" },
    { img: "https://i.ibb.co/rF7LhqL/image6.jpg" },
    { img: "https://i.ibb.co/dbGcxw0/image7.jpg" },
    { img: "https://i.ibb.co/W5tmJWY/image8.jpg" },
    { img: "https://i.ibb.co/fppDxWM/image9.jpg" }
  ];
  
  const data = [
    {
      img: "https://i.ibb.co/dbGcxw0/image7.jpg",
      link: "https://player.vimeo.com/video/939717220?badge=0&player_id=0&app_id=58479&autoplay=1",
      title: "Kawaii Group Office",
      description: "JCX Business Tower, Plot 1136/A, Japan Street, Block # I, Bashundhara R/A, Dhaka - 1229, Bangladesh",
    },
    {
      img: " https://i.ibb.co/74RP7TS/Screenshot-2024-04-27-000209.png",
      link: "https://player.vimeo.com/video/939704093?h=8ae2dd1e5a&autoplay=1",
      title: "Japan World SSW Training Center",
      description: "JAPAN SSW TRAINING CENTRE in Bangladesh",
    },
    {
      img: "https://i.ibb.co/pLcPLJ4/Screenshot-2024-04-27-001227.png",
      link: "https://player.vimeo.com/video/939723499?h=66c749e068&autoplay=1",
      title: "Japan Green City",
      description: "Futuristic Green City",
    },
    {
      img: "https://i.ibb.co/rHwccwy/Screenshot-2024-04-27-001147.png",
      link: "https://player.vimeo.com/video/939708754?badge=0&autoplay=1&player_id=0&app_id=58479",
      title: "Pachdona Japan Business Center",
      description: "Future of Japan and Bangladesh Business Hub",
    },
    {
      img: " https://i.ibb.co/p3mNPBM/Screenshot-2024-04-27-000331.png",
      link: "https://player.vimeo.com/video/939705305?h=2debb0360a&autoplay=1",
      title: "Japan Business Center",
      description: "Future of Japan and Bangladesh Business Hub",
    }
  ];

  const [activeVid, setActiveVid] = useState(data[0].link);
  const [actTitle, setActTitle] = useState(data[0].title);
  const [description, setActiveDescription] = useState(data[0].description);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (img) => {
    setShowModal(true);
    setSelectedImage(img);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full md:w-11/12 h-full py-2 mt-16 gap-2">
        <Video
          link={activeVid}
          title={actTitle}
          description={description}
        />
        <div className="w-full md:w-3/6 overflow-y-scroll flex flex-col my-4 mx-auto md:mr-20 border-slate-200 border-2 rounded-lg"
             style={{ height: "min(70vw, 650px)", padding: '10px' }}>
          <h3 className="text-2xl p-2 font-semibold">Kawaii Group</h3>
          <p className="px-2">Playlist</p>
          {data.map((e, index) => (
            <div key={index}
                className="hover:bg-gray-300 p-2 border-2 rounded-xl my-2"
                onClick={() => {
                    setActiveVid(e.link);
                    setActTitle(e.title);
                    setActiveDescription(e.description);
                }}>
              <img
                className="w-1/2 h-20 my-4 mx-auto md:mx-2 float-left cursor-pointer"
                src={e.img}
                alt={e.title}
                onClick={() => openModal(e.img)}
              />
              <p className="ml-2 font-semibold pt-12 pl-48 text-sm">
                {e.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 lg:px-8 lg:pt-24">
      <h3 className="text-2xl p-2 font-semibold text-center mx-auto">Photo Stories</h3>
        <div className="flex flex-wrap -m-1">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img
              alt={`Gallery item ${index + 1}`}
              className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
              src={image.img}
              onClick={() => openModal(image.img)}
            />
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
