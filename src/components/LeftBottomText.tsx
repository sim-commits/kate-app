import React from 'react';

const LeftBottomText: React.FC = () => {
    return (
        <div className='bg-[#EEE0CB] h-screen flex flex-col justify-between'>
            <div className='flex-grow flex items-center justify-start'>
                <div className='text-white font-bodoni text-4xl md:text-6xl p-12 space-y-4'>
                    <div>First</div>
                    <div>First</div>
                    <div>First</div>
                    <div>First</div>
                </div>
            </div>
        </div>
    );
};

export default LeftBottomText;
