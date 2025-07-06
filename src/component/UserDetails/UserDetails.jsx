import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    //const params=useParams();
    //destructure
    const {userId}=useParams();
    console.log(userId);
    const {name,username,email,address}= user;
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>User Name: {username}</p> 
            <p>Email: {email}</p> 
            <p>Address:{address.street}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default UserDetails;