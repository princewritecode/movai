import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { appRouter } from './App.js';
import { RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={appRouter}>
  // </RouterProvider>
  <App></App>
);