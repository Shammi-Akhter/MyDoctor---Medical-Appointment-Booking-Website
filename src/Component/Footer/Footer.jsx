import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    const links = <>
        <div className='flex justify-center items-center text-[10px] gap-2  border-b-gray-200  p-4'>
        <Link to={'/'}className='hover:border-b-2 hover:bg-gray-100 w-12 h-8 p-2 hover:rounded-lg'>Home</Link>
            <Link to={'/my-booking'}className='hover:border-b-2 hover:bg-gray-100 w-20 h-8 p-2 hover:rounded-lg'>My-Bookings</Link>
            <Link to={'/blog'}className='hover:border-b-2 hover:bg-gray-100 w-12 h-8 p-2 hover:rounded-lg'>Blogs</Link>
            <Link to={'/contactUs'}className='hover:border-b-2 hover:bg-gray-100 w-20 h-8 p-2 hover:rounded-lg'>Contact Us</Link>
        </div>
    </>
    return (

        <div className=' bg-white'>
            <div className='  p-5'>
                <div className='flex justify-center items-center gap-1 '>
                    <img className='w-[30px] h-[30px]' src="https://i.ibb.co.com/7tC2mzkq/logo-DBn-Mtpi3.png" alt="" />
                    <h3 className='font-extrabold'>Phudu</h3>

                </div>
                {
                    links
                }

                <div className='border-b border-gray-200 mx-auto   w-6/10 items-center'>

                </div>
                <div className='flex justify-center items-center gap-2 p-4'>
                    <a href="https://www.facebook.com/" target='blank'>
                    <FaFacebook className='w-[24px] h-[24px] text-blue-500' />
                    </a>
                    <a href="https://x.com/?lang=en" target='blank'>
                        <img className='w-[30px] h-[30px]' src="https://i.ibb.co.com/nq0gzJYL/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.webp" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/" target='blank'>
                        <img className='w-[30px] h-[30px]' src="https://i.ibb.co.com/TxK3f5g3/b2f828513f21444829a619ce563d4d4e.jpg" alt="" />
                    </a>
                    <a href="https://www.youtube.com/" target='blank'>
                        <img className='w-[30px] h-[30px]' src="https://i.ibb.co.com/RpKhjcc8/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp" alt="" />
                    </a>

                </div>

            </div>
        </div>

    );
};

export default Footer;