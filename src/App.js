import './index.css';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';

// Define the router with nested routes
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Render Body here, which will include the Outlet
    children: [
      { path: '/', element: <Body></Body> }, // You can customize this
      { path: '/login', element: <Login /> },
      { path: '/browse', element: <Browse /> },
    ]
  },
]);
function App()
{
  return (
    <div className="App">
      {/* <Header />
      <Outlet></Outlet> */}
      <Body></Body>
    </div>
  );
}
export default App;