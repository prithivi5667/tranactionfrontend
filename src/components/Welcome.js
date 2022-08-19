import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h3>Please <b>create</b> Your Account/ <b>Login to your Account</b></h3>
                <div className='Mainpage'>
                 <Link className='btn btn-primary' to="/profile">View Transaction details </Link>

                </div>
        </div>
    );
}

export default Welcome;