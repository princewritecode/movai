import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from "../utils/validate.js";
const Login = () =>
{
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const toggleSignUpForm = () =>
    {
        setIsSignInForm(!isSignInForm);
    };
    const handleClick = () =>
    {
        //validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        //sign in sign up logic
        if (!isSignInForm)
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage);
                    // ..
                });
        }
        else
        {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage);
                });

        }
    };
    return (
        <>
            <Header></Header>
            <div className='absolute h-full'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='bg-opacity-80 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md'>
                <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? 'sign in' : 'sign up'}</h1>
                {!isSignInForm &&
                    (<input ref={name} type='text' placeholder='Full Name' className='bg-gray-700 p-2 my-2 w-full'></input>)}
                <input ref={email} type='email' placeholder='email' className='bg-gray-700 p-2 my-2 w-full'></input>
                <input ref={password} type='password' placeholder='password' className='bg-gray-700 p-2 my-2 w-full'></input>
                <p className='text-red-600'> {errorMessage} </p>
                <button className=' py-4 my-4 bg-red-700 w-full rounded-md' onClick={handleClick}>{isSignInForm ? 'sign in' : 'sign up'}</button>
                <p>{isSignInForm ? 'New to netflix ?' : 'Already a member ?'} <span className='cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? 'Sign up now' : 'Sign in'}</span></p>
            </form>
        </>
    );
};

export default Login;