import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const users=useLoaderData();

    //state -->Data
    //state -->Loader
    //use Effect
    //fetch --> state set  -->set state
    return (
        <div >
            <h2>Users Length : {users.length}</h2>
            <div className='users mt-8'>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;