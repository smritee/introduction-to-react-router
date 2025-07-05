import { Link } from "react-router-dom";


const User = ({user}) => {
    const{id,name,email,phone}=user;
    const userStyle={
        border: '2px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }
    return (

        <div style={userStyle}>
            <h1>Id:{id}</h1>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/user/${id}`} >Show Details</Link></p>
            <p><Link to={`/user/${id}`} ><button>Show Details</button></Link></p>
        </div>
    );
};

export default User;