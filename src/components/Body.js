import React, { useEffect } from 'react';
import Login from './Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () =>
{
    const dispatch = useDispatch();
    useEffect(() =>
    {
        onAuthStateChanged(auth, (user) =>
        {
            if (user)
            {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user.uid;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                // ...
            } else
            {
                // User is signed out
                // ...

                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};




const appRouter = createBrowserRouter([
    { path: '/', element: <Login></Login> },
    { path: '/browse', element: <Browse></Browse> },
]);


export default Body;