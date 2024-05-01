import React from 'react';
import sswNews from '../../assets/videos/sswNews.mp4';

const JapanSsw = () => {
  return (
    <>
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden mt-16 bg-white">
            

          <iframe 
                src="https://player.vimeo.com/video/939704093?h=8ae2dd1e5a&autoplay=1" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>


            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
          <h1 style={{
  color: 'white', 
  backgroundColor: 'rgb(6, 3, 38)',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '900', // extra bold
  fontSize: '36px', // size of the font
  padding: '20px', // padding around the text
  textAlign: 'center', // centers the text
  borderRadius: '10px' // rounds the corners of the background
}}>
  JAPAN WORLD SSW TRAINING CENTER LTD.
</h1>
            <p className="text-gray-700 text-lg mb-4">
              The Kawaii Group aims to address Japan's labor shortage by establishing the JAPAN SSW TRAINING CENTRE in Bangladesh. Despite a good relationship, Bangladesh lacks opportunities for practical training and language development required for the Japanese job market. Unlike other countries, Bangladesh faces a disadvantage in sending skilled workers to Japan. The Centre plans to train 50,000 workers in the next decade, enhancing their competitiveness in the Specific Skilled Workers (SSW) sector.
            </p>
            <h2 style={{ color: 'white', backgroundColor: 'black' }}>Overview of the JAPAN SSW TRAINING CENTRE</h2>
            <p className="text-gray-600 mb-3">
              For this reason, we, The Kawaii Group, plan to establish a complete compliance Centre with a Japanese environment flavor or mini-Japan, the JAPAN SSW TRAINING CENTRE, to make the Bangladeshi workforce more competitive in the SSW job sector in Japan. The Centre aims to prepare approximately 50,000 workforce over the next 10 years.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Japanese Language Training:</strong> The Centre will offer Japanese language courses at all levels, from beginner to advanced. The courses will be taught by native Japanese teachers and will focus on practical communication skills for the workplace.</li>
              <li><strong>Skill Assessment:</strong> Skill assessments are available for four SSW sectors, conducted by experienced Japanese professionals. These assessments ensure candidates possess the requisite skills and knowledge required for their chosen field.</li>
              <li><strong>Practical Training:</strong> Candidates have the opportunity to undergo practical training in real-world Japanese work settings. This training is supervised by Japanese professionals, allowing candidates to refine their skills and gain valuable experience.</li>
              <li><strong>Job Placement Assistance:</strong> The Centre extends job placement support to all successful candidates. Leveraging its network of connections with Japanese employers, the Centre aids graduates in securing employment opportunities in their chosen fields.</li>
              <li><strong>Medical Checkup Centre:</strong> A dedicated medical checkup Centre is available to conduct comprehensive health examinations, ensuring candidates are fit for work in Japan.</li>
              <li><strong>Digital Exam Centre:</strong> The Centre features a specialized facility for digital examinations, evaluating candidates' knowledge in subjects related to their desired job roles.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              The JAPAN SSW TRAINING CENTRE is committed to equipping individuals with the necessary skills and resources for a successful career in Japan. In addition to these services, the Centre will also offer a Japanese environment flavor or mini-Japan to help candidates immerse themselves in Japanese culture and language. The Centre will have a Japanese-style cafeteria, a Japanese library, and a Japanese garden. The Centre will also host regular Japanese cultural events and festivals.
            </p>
            <p className="text-gray-600 mt-4">
              The JAPAN SSW TRAINING CENTRE is a new and innovative initiative that will help the Bangladeshi workforce achieve their dreams of working in Japan. The Centre is committed to providing the highest quality training and support to its students.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-16">Latest News</h2>
          {/* Additional Videos */}
          <div className="relative pt-[56.25%] overflow-hidden mt-16 bg-white">
            <video controls className="absolute top-0 left-0 w-full h-full aspect-video">
              <source src={sswNews} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="text-xl font-bold mt-4">Recent News</h2>
          </div>

        </div>
      </div>
    </>
  );
};

export default JapanSsw;