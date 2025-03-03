import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/land1.png';
import image3 from '../assets/land3.png';
import image4 from '../assets/land4.png';
import image5 from '../assets/land5.png';
import image6 from '../assets/land6.png';
import image7 from '../assets/land7.png';
import image8 from '../assets/land8.png';

const Land: React.FC = () => {
    const imagesCol1 = [image1, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8];
    return <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3}></ThreeColumnPhoto>;
};

export default Land;
