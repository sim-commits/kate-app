import React from 'react';

const About: React.FC = () => {
    return (
        <div className='flex flex-col min-h-screen text-left md:mt-8 px-4 md:px-32'>
            <h1 className='text-xl md:text-4xl font-inknut tracking-wide text-gray-900'>About</h1>
            <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Kate Colby is a fashion designer with a deep appreciation for craftsmanship, storytelling, and innovation. A graduate of Parsons School of Design, BFA with international experience at Paris College of Art, she blends technical training with an artistic approach.</p>
            <br />
            <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Her work often draws inspiration from travel, history, hand methods, and the ever-evolving language of fashion. With hands-on experience in design, production, and styling, Kate brings a well-rounded perspective to each project, ensuring that every piece is not only visually compelling but also thoughtfully made, with a story to tell. </p>
            <br />
            <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Kate has collaborated on ready to wear, swim, and theatrical productions, and is continuously refining her skills. She enjoys working with up and coming designers guiding their collection development process. She is passionate about sustainability and committed to creating thoughtful, well-crafted designs.</p>
        </div>
    );
};

export default About;
