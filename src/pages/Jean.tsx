import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/jean1.png';
import image2 from '../assets/jean2.png';
import image3 from '../assets/jean3.png';
import image4 from '../assets/jean4.png';
import image5 from '../assets/jean5.png';
import image6 from '../assets/jean6.png';
import image7 from '../assets/jean7.png';
import image8 from '../assets/jean8.png';
import image9 from '../assets/jean9.png';

const Jean: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-4xl font-inknut tracking-wide text-gray-900'>STYLING</h1>
                <p className='text-2xl font-inknut text-gray-700 mt-2'>JEAN BAPTISTE: Reset, Refined, Reborn by MikeRuiz @mikeruizone for STYLE by SCMP, April 2023 issue Model- JeanBaptiste @jeanbatriste </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Styled by Kristine Kilty @kristinekilty. Brands include Versace, VanCleefArpels + more. </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Makeup byOlivier Tissot @olivier_tissot </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Hair by Cyrillic Fort @cyrillaforetcovers </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Retouching by Zagornaya Darya. </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Fashion Assistants- Kate Colby & Tarren Garcia </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Photography Assistant- Lorenzo Fioravanti @lofioravantiserves</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Jean;
