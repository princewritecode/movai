import React from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
const Body = () =>
{
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