import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is correct

const Header = () =>
{
    return (
        <div className='z-10 absolute px-8 py-2 bg-gradient-to-b from-black'>
            {/* <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="browse">Browse</Link>  */}
            <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
        </div>
    );
};

export default Header;