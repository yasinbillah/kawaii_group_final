const Mission = () => {
    const images = [
        {
            src: 'https://i.ibb.co/XFqpBPv/Media-Player-4-19-2024-3-32-32-PM-1.png',
            alt: '/',
            imgClass: 'object-cover w-full h-full'
        },
        {
             src: 'https://i.ibb.co/7j7Rv5q/Media-Player-4-19-2024-3-37-05-PM.png',
            alt: '/',
            imgClass: 'row-span-2 object-cover w-full h-full'
        },
        {
            src: 'https://i.ibb.co/37N0W8J/PXL-20240418-105814071-MP.jpg',
            alt: '/',
            imgClass: 'object-cover w-full h-full'
        }
    ];
    
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2 text-blue-900'>
        <h3 className='text-2xl font-bold'>Mission</h3>
        <p className='pt-4'>
        Our mission is to lead the way in global innovation by leveraging the Kawaii culture to enhance every industry we touch. We strive to create sustainable, high-quality solutions that not only meet but exceed the expectations of our customers and partners worldwide. Through our diverse operations, we aim to promote cultural exchange, drive economic growth, and contribute to global harmony and understanding.
        </p>
      </div>

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
    </div>
  );
};

export default Mission;