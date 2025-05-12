import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Cell
} from 'recharts';
const COLORS = ['#de5d33  ','#eeb137' , '#1f33bf ', '#3ad7e1 ', '#20b234 ', '#ded416 ', '#de5d33 '];

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;

  const topX = x + width / 2;
  const topY = y;

  const leftX = x;
  const leftY = y + height;

  const rightX = x + width;
  const rightY = y + height;

  return (
    <path
      d={`
        M${leftX},${leftY}
        Q${topX},${y + height / 2} ${topX},${topY}
        Q${topX},${y + height / 2} ${rightX},${rightY}
        Z
      `}
      fill={fill}
    />
  );
};


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('appointments')) || {};
    const bookingList = Object.values(storedBookings);
    setBookings(bookingList);
  }, []);

  const handleCancel = (doctorId) => {
    const updatedBookings = { ...JSON.parse(localStorage.getItem('appointments')) };
    delete updatedBookings[doctorId];
    localStorage.setItem('appointments', JSON.stringify(updatedBookings));
    setBookings(Object.values(updatedBookings));
    toast.error('Appointment cancelled', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (bookings.length === 0) {
    return (
      <div className="container mx-auto p-4 md:mb-32">
        <div className="bg-white rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">You have not booked any appointment yet</h1>
          <p className='text-normal text-gray-400 pb-4'>Our Platform connects you with verified experienced doctors across various specialist - all at your convenience</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    );
  }

  
  const chartData = bookings.map((booking) => ({
    name: booking.doctorName,
    fee: parseFloat(booking.doctorFee),
  }));

  return (
    <div className="container mx-auto p-4">
      
      <div className="bg-white p-4 rounded-lg mb-8 shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Appointment Fees by Doctor</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickCount={7} interval={0} domain={[0, 'dataMax + 100']} tick={{ fontSize: 12 }} tickLine={false} />
            <Tooltip />
            <Bar dataKey="fee" shape={<TriangleBar />}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

      <h1 className="text-3xl font-bold mt-15 mb-2 text-center">My Today's Appointments</h1>
      <p className="text-lg font-normal mb-8 text-center">We’re here to connect you with skilled, caring doctors from various fields — all from the comfort of your home.</p>
     
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-lg p-6 shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold">{booking.doctorName}</h2>
                <p className="text-gray-600">{booking.doctorEducation}</p>
              </div>
              <div>
                <p className="mt-2 text-lg text-gray-500">Appointment Fee: {booking.doctorFee} Taka + Vat</p>
                <p className="text-sm text-gray-300">
                  Booked on: {new Date(booking.bookedAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="border-t-1 border-dashed border-gray-300 py-2"></div>
            <button
              onClick={() => handleCancel(booking.doctorId)}
              className="mt-2 text-red-600 hover:text-red-800 text-sm font-medium border border-red-400 w-full rounded-3xl p-2"
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
