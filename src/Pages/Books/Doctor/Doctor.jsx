import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ singleDoctor }) => {
    const { id,image, name, education, speciality, experience, registration_number } = singleDoctor;

    return (
        <div className="card  bg-base-100 w-full md:w-96 shadow-sm ">
            <figure className='p-3 mt-6 w-5/6 mx-auto rounded-2xl bg-blue-100'>
                <img className='h-[166px] rounded-2xl'
                    src={image}
                    alt="image not found" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    <div className=" rounded-3xl border p-1 text-green-400 text-center border-green-300 bg-green-100  ">
                        <h1 className='font-medium text-[10px]'>Available</h1>
                    </div>
                    <div className=" w-[134px] rounded-3xl border p-1 text-blue-400 text-center border-blue-300 bg-blue-100">
                        <h1 className="font-medium text-[10px]">{experience}</h1>
                    </div>
                </div>
                <h2 className="card-title"> {name}</h2>
                <p className='text-[12px] text-gray-400'>{education} - {speciality}</p>
                <div className='border-t-1 border-dashed border-gray-300'>

                </div>
                <h4 className='text-[11px] text-gray-400'>Ⓡ Reg No: {registration_number}</h4>
                
                <Link to={`/doctorDetails/${id}`}><div className="card-actions">
                    <div className=" w-full rounded-3xl border p-1 font-semibold text-blue-500 text-center border-blue-300 ">
                        <button>View details</button>
                    </div>

                </div></Link>
            </div>
        </div>
    );
};

export default Doctor;