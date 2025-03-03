import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/IMG_0049.png';
import image2 from '../assets/IMG_0050.png';
import image3 from '../assets/IMG_0054.png';
import image4 from '../assets/IMG_0057.png';
import image5 from '../assets/IMG_0062.png';
import image6 from '../assets/IMG_0064.png';

const Waiwaolani: React.FC = () => {
    const imagesCol1 = [image1, image2];
    const imagesCol2 = [image3, image5];
    const imagesCol3 = [image4, image6];
    return <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3}></ThreeColumnPhoto>;
};

export default Waiwaolani;
