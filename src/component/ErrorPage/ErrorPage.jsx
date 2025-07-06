import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    
    
    return (
        <div>
            <h2>OOps!!!</h2>
            <p>{error.statusText}</p>
            {
                error.status===404 && <div>
                    <h3>Page Not Found</h3> 
                    <Link to={"/"}>Home</Link>   
                </div>
            }
        </div>
    );
};

export default ErrorPage;