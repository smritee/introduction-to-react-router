import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>            
            <h1>Home Page</h1>
            <Outlet></Outlet>
        </div>

    );
};

export default Home;