const Vision = () => {
    const images = [
        {
            src: 'https://i.ibb.co/YffNGfv/PXL-20240418-105604239-MP.jpg',
            alt: '/',
            imgClass: 'object-cover w-full h-full'
        },
        {
            src: 'https://i.ibb.co/2npgVp2/IMG-0075.jpg',
            alt: '/',
            imgClass: 'row-span-2 object-cover w-full h-full'
        },
        {
            src: 'https://i.ibb.co/DrPPfqG/Media-Player-4-19-2024-3-33-28-PM.png',
            alt: '/',
            imgClass: 'object-cover w-full h-full'
        }
    ];

    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='grid grid-cols-2 col-span-2 gap-2'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={image.imgClass}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2 text-blue-900'>
                <h3 className='text-2xl font-bold'>Vision</h3>
                <p className='pt-4'>
                At Kawaii Group, we are dedicated to blending the unique aesthetic of Kawaii with cutting-edge innovation in fashion and style, engineering and construction, technology, and more. Our mission is to bridge cultural divides and foster a unique exchange of ideas and values between Japan and the world.
                </p>
            </div>
        </div>
    );
};

export default Vision;