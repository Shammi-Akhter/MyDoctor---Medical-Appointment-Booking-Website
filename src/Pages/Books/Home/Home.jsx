import React from 'react';
import Banner from '../../../Component/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import WeProvide from '../../WeProvide/WeProvide';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Doctors data={data}></Doctors>
            <WeProvide></WeProvide>
        </div>
    );
};

export default Home;