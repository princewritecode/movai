import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is correct
import logo from '../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Header = () =>
{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () =>
    {
        signOut(auth).then(() =>
        {
            // Sign-out successful.
            navigate('/');
        }).catch((error) =>
        {
            // An error happened.
        });

    };

    return (
        <div className='flex justify-between z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black'>
            {/* <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="browse">Browse</Link>  */}
            <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
            <div className='flex w-44 items-center justify-between'>
                <img className='w-10' src={logo}></img>
                <button onClick={handleSignOut} className='bg-red-400 rounded-md text-white px-4 py-2'>Sign Out</button>
            </div>
        </div>
    );
};

export default Header;