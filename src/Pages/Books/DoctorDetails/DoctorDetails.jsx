import React, { useState, } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const navigate = useNavigate();

  const singleDoctor = data.find(doctor => doctor.id === doctorId);
  const { image, name, education, speciality, fee, hospital, registration_number } = singleDoctor;

  const [isButtonDisabled, setIsButtonDisabled] = useState(() => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    return !!appointments[doctorId];
  });

  
  const handleBookAppointment = () => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || {};
    console.log('Existing appointments:', appointments);
    console.log('Checking doctorId:', doctorId);

    if (appointments[doctorId]) {
      toast.info('You already booked this doctor!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    
    const newAppointment = {
      id: Date.now(), 
      doctorId,
      doctorName: name,
      doctorEducation: education,
      doctorFee: fee,
      bookedAt: new Date().toISOString(),
      status: 'confirmed'
    };

    
    const updatedAppointments = {
      ...appointments,
      [doctorId]: newAppointment
    };
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    setIsButtonDisabled(true);
    toast.success(`${name} - Appointment booked!`, { position: "top-right" });

    navigate('/my-booking');
  };
  return (
    <div className='container mx-auto'>
      <div className='bg-white rounded-2xl text-center p-5 mb-4'>
        <h1 className='font-extrabold text-[32px]'>Doctor’s Profile Details</h1>
        <p className='text-gray-400 font-medium text-[16px] mb-10'>
          "Your health is our priority — we’re here to listen, care, and heal. Together, let’s build a healthier tomorrow."
        </p>
      </div>

      <div className='bg-white rounded-2xl md:p-5 md:mb-4 flex flex-col md:flex-row  gap-5 items-center'>
        <div className='bg-blue-100 rounded-2xl w-[335px] h-[383px] flex justify-center items-center'>
          <img src={image} alt={name} className="rounded-2xl h-[300px]   mx-auto " />
        </div >
        <div className='mx-4'>
          <h1 className='md:text-[32px] text-[18px] font-bold'>{name}</h1>
          <h2 className='md:text-[18px] text-[12px]  font-medium  text-gray-500'>{education}</h2>
          <h3 className='md:text-[18px] text-[12px] font-medium  mb-5 text-gray-500'>{speciality}</h3>
          <div>
            <h1 className='md:text-[18px] text-[12px] font-medium  text-gray-400'>Working AT</h1>
            <h4 className='md:ext-[19px] text-[12px] font-bold mb-5 '> {hospital}</h4>
          </div>

          <div className='border-1 border-dashed border-gray-200 ' >

          </div>
          <h5 className='md:text-[18px] text-[12px] font-medium text-gray-400 my-3'>Ⓡ Reg NO: {registration_number}</h5>
          <div className='border-1 border-dashed border-gray-200' >

          </div >
          <div className='flex gap-5'>
            <h1 className='text-[15px] font-bold  my-3'>Availability</h1>
            <div className=" rounded-2xl w-[79px] h-[32px] my-2 border p-2 text-orange-400 text-center border-orange-300 bg-orange-100  ">
              <h1 className='font-medium text-[10px]'>Sunday</h1>
            </div>
            <div className=" rounded-2xl w-[79px] h-[32px] my-2 border p-2 text-orange-400 text-center border-orange-300 bg-orange-100  ">
              <h1 className='font-medium text-[10px]'>Monday</h1>
            </div>
            <div className=" rounded-2xl w-[79px] h-[32px] my-2 border p-2 text-orange-400 text-center border-orange-300 bg-orange-100  ">
              <h1 className='font-medium text-[10px]'>Tuesday</h1>
            </div>
          </div>
          <p className='text-[15px] font-bold  my-3'>Consultation Fee: <span className='text-blue-500 font-bold'>Taka: {fee}</span> (incl. Vat) <span className='text-blue-500 font-bold'>Per consultation</span></p>
        </div>
      </div>

      <div className='bg-white rounded-2xl text-center p-5 mb-4'>
        <h1 className='font-extrabold text-[24px] p-2'>Book an Appointment</h1>
        <div className='border-t-1 border-dashed border-gray-300 p-2'></div>

        <div className='flex justify-between'>
          <h4 className='font-semibold'>Availability</h4>
          <div className="rounded-3xl border p-1 w-[182px] text-green-400 text-center border-green-300 bg-green-100">
            <h1 className='font-medium text-sm'>Doctor Available Today</h1>
          </div>
        </div>

        <div className="rounded-3xl p-2 md:p-1 w-full text-orange-200 text-center bg-orange-50 md:mt-10">
          <h1 className='font-medium text-sm'>
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </h1>
        </div>

        <div className='mt-8 p-4'>
          <button
            className='bg-blue-600 text-white font-semibold cursor-pointer text-[15px] w-full p-2 rounded-3xl'
           
            onClick={handleBookAppointment}
          >
            {isButtonDisabled ? 'Appointment Booked' : 'Book Appointment Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
