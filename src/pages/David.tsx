import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/brown21.png';
import image2 from '../assets/browndress32.png';
import image3 from '../assets/dress21.png';
import image4 from '../assets/hibiscusedited1.png';
import image5 from '../assets/long11.png';
import image6 from '../assets/long31.png';
import image7 from '../assets/pantsfit1.png';
import image8 from '../assets/skirt1.png';
import image9 from '../assets/skirt31.png';

const Ballet: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9];
    return <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3}></ThreeColumnPhoto>;
};

export default Ballet;
