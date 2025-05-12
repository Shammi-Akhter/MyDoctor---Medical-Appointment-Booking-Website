import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto' >
            <div className='bg-gradient-to-t from-white via-gray-50 to-gray-100 rounded-2xl border-2 border-transparent p-10' >
                <h1 className='font-extrabold text-[28px] p-5 text-center '>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='font-medium text-[12px] text-center text-gray-500'> Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='flex items-center gap-2 p-4 md:pl-40 md:pr-40'>
                    <input type="text" placeholder='Search any doctor ...' className='text-gray-300 text-[10px] border border-gray-200 rounded-2xl w-2xl p-2' />
                    <button className='btnSearchNow bg-blue-600 text-white font-semibold text-[10px] md:w-[160px] w-full p-2 rounded-3xl'>Search now</button>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4  '>
                    <img className='w-full md:w-[50%] md:h-[390px] rounded-xl' src="https://i.ibb.co.com/XZ46M3hV/banner-img-1.png" alt="" />
                    <img className='w-full md:w-[50%]  md:h-[390px] rounded-xl' src="https://i.ibb.co.com/X11p01v/Consult-doctors-2e16d0ba-fill-1920x1080-c0.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;