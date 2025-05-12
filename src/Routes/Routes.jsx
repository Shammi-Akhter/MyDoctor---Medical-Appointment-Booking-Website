import React from 'react';
import { createBrowserRouter } from "react-router"; 
import Root from '../Pages/Books/Root/Root';
import ErrorPage from '../Pages/Books/ErrorPage/ErrorPage';
import Home from '../Pages/Books/Home/Home';
import DoctorDetails from '../Pages/Books/DoctorDetails/DoctorDetails';
import Blog from '../Pages/Blog/Blog';
import Booking from '../Pages/Books/Bookings/Bookings';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        loader: () => fetch("/doctorsData.json"),
        element: <Home />
      },
      {
        path: '/doctorDetails/:id',
        loader: () => fetch("/doctorsData.json"),
        element: <DoctorDetails />
      },
      {
        path: '/blog',
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 50)); 
          return null;
        },
        element: <Blog />
      },
      {
        path: '/contactUs',
        loader: async () => {
          await new Promise(resolve => setTimeout(resolve, 50));
          throw new Response("Not Found", { status: 404 }); 
        },
        element: <div /> 
      },
      {
        path: "/my-booking",
        loader: () => fetch("/doctorsData.json"),
        element: <Booking />
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
