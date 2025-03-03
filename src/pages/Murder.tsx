import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/murder1.png';
import image2 from '../assets/murder2.png';
import image3 from '../assets/murder3.png';
import image4 from '../assets/murder4.png';
import image5 from '../assets/murder5.png';
import image6 from '../assets/murder6.png';
import image7 from '../assets/murder7.png';
import image8 from '../assets/murder8.png';
import image9 from '../assets/murder9.png';
import image10 from '../assets/murder10.png';
import image11 from '../assets/murder11.png';

const Murder: React.FC = () => {
    const imagesCol1 = [image1, image2, image3, image10];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9, image11];
    return <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3}></ThreeColumnPhoto>;
};

export default Murder;
