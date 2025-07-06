import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation=useNavigation();
    const location=useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>        
            {
                navigation.state ==="loading"? 
                <p>Loading... {location.pathname}</p>:
                <Outlet></Outlet>
            }    
            <h1>Home Page</h1>
            
        </div>

    );
};

export default Home;