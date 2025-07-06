import { Link, useNavigate  } from "react-router-dom";


const User = ({user}) => {
    const{id,name,email,phone}=user;
    const navigate = useNavigate();
    const userStyle={
        border: '2px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }

    const handleShowDetails=()=>{
        navigate(`/user/${id}`);
    }
    return (

        <div style={userStyle}>
            <h1>Id:{id}</h1>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/user/${id}`} >Show Details</Link></p>
            <p><Link to={`/user/${id}`} ><button>Show Details</button></Link></p>
            <p><button onClick={handleShowDetails}>Click to show Details</button></p>
        </div>
    );
};

export default User;