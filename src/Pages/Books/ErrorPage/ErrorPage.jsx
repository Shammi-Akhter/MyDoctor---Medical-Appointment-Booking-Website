import React from 'react';
import Navbar from '../../../Component/Header/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto bg-white text-center p-10 rounded-xl mb-10'>
                <h1 className='text-40px font-semibold p-2 '>No Doctor Found!!!!!</h1>
                <p className='text-sm text-gray-400 p-2'>No doctor found with this registration NO ! </p>
                <button className='bg-blue-600 text-white font-semibold text-[10px] w-[110px] p-2 rounded-xl'>
                    <Link to="/" className="w-full h-full block text-center">View All Doctors</Link>
                    </button>
            </div>

        </div>
    );
};

export default ErrorPage;