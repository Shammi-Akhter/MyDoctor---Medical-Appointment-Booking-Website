import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {

const [showAll,setShowAll] = useState(false);

const doctorsToDisplay = showAll ? data : data.slice(0, 6);


    return (
        <div className='container mx-auto pl-5'>
            <h1 className='text-3xl font-bold text-center p-6'>Our Best Doctors</h1>
            <p className='text-sm text-center p-2 mb-4'>Access trusted healthcare from the comfort of your home. Our platform connects you with verified doctors across multiple specialties — offering convenient appointment booking and expert care, <br /> whether it’s a routine visit or an urgent concern.</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                doctorsToDisplay.map((singleDoctor) => <Doctor key={singleDoctor.id} singleDoctor={singleDoctor} ></Doctor>)
            }
            </div>
           
            {!showAll && (
                <div className='text-center mt-6 '>
                    <button
                        className='bg-blue-600 text-white font-semibold text-[12px] px-4 py-2 rounded-3xl'
                        onClick={() => setShowAll(true)}
                    >
                        View All Doctors
                    </button>
                </div>
            )}

        </div>
    );
};

export default Doctors;