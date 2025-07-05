import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {name,username,email,address}= user;
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>User Name: {username}</p> 
            <p>Email: {email}</p> 
            <p>Address:{address.street}</p>

        </div>
    );
};

export default UserDetails;