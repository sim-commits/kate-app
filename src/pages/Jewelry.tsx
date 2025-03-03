import image1 from '../assets/jewel1.png';
import image2 from '../assets/jewel2.png';
import image3 from '../assets/jewel4.png';

const Jewelry: React.FC = () => {
    const images = [image1, image2, image3];

    return (
        <div className='flex flex-col justify-center items-center space-y-4 p-16 w-full'>
            {images.map((src, index) => (
                <div key={index} className='w-full flex justify-center'>
                    <img src={src} alt={`Image ${index + 1}`} className='w-full object-cover rounded-lg shadow-lg' />
                </div>
            ))}
        </div>
    );
};

export default Jewelry;
