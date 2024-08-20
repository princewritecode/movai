import React, { useState } from 'react';
import Header from './Header';
const Login = () =>
{
    const [isSignInForm, setIsSignInForm] = useState(true);


    const toggleSignUpForm = () =>
    {

        setIsSignInForm(!isSignInForm);

    };
    return (
        <div>
            <Header></Header>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
            </div>

            <form className='bg-opacity-80 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md'>
                <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? 'sign in' : 'sign up'}</h1>
                {!isSignInForm && (<input type='text' placeholder='Full Name' className='bg-gray-700 p-2 my-2 w-full'></input>)}
                <input type='text' placeholder='email' className='bg-gray-700 p-2 my-2 w-full'></input>
                <input type='password' placeholder='password' className='bg-gray-700 p-2 my-2 w-full'></input>

                <button className=' py-4 my-4 bg-red-700 w-full rounded-md'>{isSignInForm ? 'sign in' : 'sign up'}</button>
                <p>{isSignInForm ? 'New to netflix ?' : 'Already a member ?'} <span className='cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? 'Sign up now' : 'Sign in'}</span></p>
            </form>
        </div>
    );
};

export default Login;