import React from 'react';
import Navbar from '../../../Component/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoader from '../../../Component/GlobalLoader/GlobalLoader';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (

        <div >
            <Navbar></Navbar>
            <GlobalLoader show={isLoading} />
            <Outlet></Outlet>
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer></Footer>
        </div>
    );
};

export default Root;