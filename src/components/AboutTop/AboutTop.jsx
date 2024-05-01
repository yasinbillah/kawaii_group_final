import React from 'react';

const AboutTop = () => {
    // Define an array of image objects
    const images = [
        {
            src: 'https://i.ibb.co/4SLDp1L/kawaii-Office.png',
            alt: 'Kawaii Office',
            rowSpan: 'row-span-3'
        },
        {
            src: 'https://i.ibb.co/jhcS8Bc/Business-Tower-g1.png',
            alt: 'Business Tower',
            rowSpan: 'row-span-2'
        },
        {
            src: 'https://i.ibb.co/CwmdNmR/DSC7048.jpg',
            alt: 'Office Interior',
            rowSpan: 'row-span-2'
        },
        {
            src: 'https://i.ibb.co/pj0N29k/20240112-155953.jpg',
            alt: 'Meeting Room',
            rowSpan: 'row-span-3'
        },
        {
            src: 'https://i.ibb.co/qN658Lw/IMG-0050.jpg',
            alt: 'Office Building',
            rowSpan: 'row-span-2'
        }
    ];

    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`${image.rowSpan} object-cover w-full h-full p-2`}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Who We Are</h3>
                <p className='text-2xl py-6'>
                    Quality Innovation is the Key
                </p>
                <p className='pb-6'>
                    Welcome to Kawaii Group, where the essence of Japanese cuteness meets global business innovation. Founded on the principles of "Kawaii," a cultural phenomenon that epitomizes cuteness and charm in Japan, our group has evolved into a multifaceted conglomerate with a presence in multiple sectors across the globe. Our focus is on fashion and style, engineering & and construction, apparel, technology & and innovation, international business consultancy, human resources, automobile, language and skill development Training Centers, Trading organizations, Export–import, and so on.
                </p>
            </div>
        </div>
    );
};

export default AboutTop;
