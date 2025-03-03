import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/ballet1.png';
import image2 from '../assets/ballet2.png';
import image3 from '../assets/ballet3.png';
import image4 from '../assets/ballet4.png';
import image5 from '../assets/ballet5.png';
import image6 from '../assets/ballet6.png';
import image7 from '../assets/ballet7.png';
import image8 from '../assets/ballet8.png';
import image9 from '../assets/ballet9.png';
import image10 from '../assets/ballet10.png';

const Ballet: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9, image10];
    return <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3}></ThreeColumnPhoto>;
};

export default Ballet;
