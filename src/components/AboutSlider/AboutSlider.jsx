import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const AboutSlider = () => {
    const slides = [
        {
            url: 'https://i.ibb.co/pj0N29k/20240112-155953.jpg',
            title: 'Lobster',
        },
        {
            url: 'https://i.ibb.co/74RP7TS/Screenshot-2024-04-27-000209.png',
            title: 'Sushi',
        },
        {
            url: 'https://i.ibb.co/p3mNPBM/Screenshot-2024-04-27-000331.png',
            title: 'Pasta',
        },
        {
            url: 'https://i.ibb.co/pLcPLJ4/Screenshot-2024-04-27-001227.png',
            title: 'Salmon',
        },
        {
            url: 'https://i.ibb.co/jV9rydp/IMG-0028.jpg',
            title: 'Salmon',
        },
        {
            url: 'https://i.ibb.co/NWqWYky/Media-Player-4-19-2024-3-36-48-PM.png',
            title: 'Salmon',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>
            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        className='text-2xl cursor-pointer'
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSlider;