import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const WeProvide = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.3,     
    });

    return (
        <div className="w-full px-4 py-10">
            <h1 className="font-bold text-3xl text-center p-5">
                We Provide Best Medical Services
            </h1>
            <h2 className="text-gray-400 text-sm font-normal text-center pb-5">
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </h2>

            <div className="flex justify-center" ref={ref}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl ">
                    <div className="bg-white rounded-2xl p-6 h-[200px] shadow-md w-[250px] text-center md:text-start ">
                        <img className="w-[60px] h-[60px] mx-auto md:mx-0 mb-3" src="https://i.ibb.co.com/M5pfVZng/success-doctor.png" alt="Doctor" />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={199} duration={2} />}+
                        </p>
                        <h4 className="font-semibold text-xl text-gray-400">Total Doctors</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 h-[200px] shadow-md w-[250px] text-center md:text-start">
                        <img className="w-[60px] h-[60px] mx-auto md:mx-0 mb-3" src="https://i.ibb.co.com/vvhzHcDD/success-review.png" alt="Reviews" />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={467} duration={2} />}+
                        </p>
                        <h4 className="font-semibold text-xl text-gray-400">Total Reviews</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 h-[200px] shadow-md w-[250px] text-center md:text-start">
                        <img className="w-[60px] h-[60px] mx-auto md:mx-0 mb-3" src="https://i.ibb.co.com/cSmWzYg9/success-patients.png" alt="Patients" />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={1990} duration={2.5} />}+
                        </p>
                        <h4 className="font-semibold text-xl text-gray-400">Patients</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 h-[200px] shadow-md w-[250px] text-center md:text-start">
                        <img className="w-[60px] h-[60px] mx-auto md:mx-0 mb-3" src="https://i.ibb.co.com/YFyzBC1r/success-staffs.png" alt="Staffs" />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={300} duration={2} />}+
                        </p>
                        <h4 className="font-semibold text-xl text-gray-400">Total Staffs</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeProvide;
